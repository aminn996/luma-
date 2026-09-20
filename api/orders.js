const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

function parseItems(items) {
  if (!Array.isArray(items) || items.length === 0 || items.length > 50) return null;
  const normalized = items.map((item) => ({
    name: typeof item?.name === 'string' ? item.name.trim().slice(0, 120) : '',
    price: typeof item?.price === 'string' ? item.price.trim().slice(0, 40) : '',
    quantity: Number.isInteger(item?.quantity) ? item.quantity : 0,
  }));
  return normalized.every((item) => item.name && item.price && item.quantity > 0 && item.quantity <= 20) ? normalized : null;
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'POST') {
    const name = typeof req.body?.name === 'string' ? req.body.name.trim().slice(0, 120) : '';
    const tableNumber = Number(req.body?.tableNumber);
    const items = parseItems(req.body?.items);
    if (!name || !Number.isInteger(tableNumber) || tableNumber < 1 || tableNumber > 999 || !items) {
      return res.status(400).json({ error: 'Invalid order details.' });
    }
    const result = await pool.query(
      'INSERT INTO luma_orders (customer_name, table_number, items) VALUES ($1, $2, $3::jsonb) RETURNING id, customer_name, table_number, items, created_at',
      [name, tableNumber, JSON.stringify(items)],
    );
    return res.status(201).json({ order: result.rows[0] });
  }
  if (req.method === 'GET') {
    const result = await pool.query(
      'SELECT id, customer_name, table_number, items, created_at FROM luma_orders ORDER BY created_at DESC LIMIT 200',
    );
    return res.status(200).json({ orders: result.rows });
  }
  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed.' });
};

module.exports.config = { api: { bodyParser: { sizeLimit: '32kb' } } };
