import { useEffect, useState } from 'react';
import './App.css';

const images = {
  hero: '/luma assest/WhatsApp Image 2026-09-02 at 6.45.59 PM (2).jpeg',
  room: '/luma assest/WhatsApp Image 2026-09-02 at 6.46.00 PM.jpeg',
  food: '/luma assest/WhatsApp Image 2026-09-02 at 6.45.59 PM.jpeg',
  detail: '/luma assest/WhatsApp Image 2026-09-02 at 6.46.00 PM (2).jpeg',
  table: '/luma assest/WhatsApp Image 2026-09-02 at 6.46.00 PM (2).jpeg',
  outside: '/luma assest/WhatsApp Image 2026-09-02 at 6.46.00 PM (1).jpeg',
  dessert: '/luma assest/WhatsApp Image 2026-09-02 at 6.45.59 PM (3).jpeg',
  entrance: '/luma assest/WhatsApp Image 2026-09-02 at 6.45.59 PM (2).jpeg',
  interior: '/luma assest/WhatsApp Image 2026-09-02 at 6.45.59 PM (4).jpeg',
  people: '/luma assest/WhatsApp Image 2026-09-02 at 6.45.59 PM (1).jpeg',
  interiorAlt: '/luma assest/WhatsApp Image 2026-09-02 at 6.45.59 PM (5).jpeg',
  bathroom: '/luma assest/WhatsApp Image 2026-09-02 at 6.45.59 PM (6).jpeg',
  salad: '/luma assest/images (1).jpeg',
  caesar: '/luma assest/images (2).jpeg',
  tunisianSalad: '/luma assest/images (3).jpeg',
  seafoodSoup: '/luma assest/images (4).jpeg',
  pizza: '/luma assest/images (5).jpeg',
  pestoPizza: '/luma assest/images (6).jpeg',
  chickenPlate: '/luma assest/images (7).jpeg',
  chickenCream: '/luma assest/images (8).jpeg',
  latte: '/luma assest/images (9).jpeg',
  ojja: '/luma assest/images (10).jpeg',
  pizzaOven: '/luma assest/images (11).jpeg',
  fruitsDeMer: '/luma assest/Fruits de mer.webp',
  crepe: '/luma assest/crepe.webp',
};

const galleryImages = [
  images.food,
  images.people,
  images.hero,
  images.dessert,
  images.interior,
  images.interiorAlt,
  images.bathroom,
  images.room,
  images.outside,
  images.table,
  images.salad,
  images.caesar,
  images.tunisianSalad,
  images.seafoodSoup,
  images.pizza,
  images.pestoPizza,
  images.chickenPlate,
  images.chickenCream,
  images.latte,
  images.ojja,
  images.pizzaOven,
  images.fruitsDeMer,
  images.crepe,
];

const menuImages = {
  Breakfast: images.table,
  Starters: images.caesar,
  Pizza: images.pizzaOven,
  Main: images.fruitsDeMer,
  'Pasta & Rice': images.chickenCream,
  Ojja: images.ojja,
  Sandwiches: images.table,
  'Crepes & Waffles': images.crepe,
  Dessert: images.dessert,
  Drinks: images.dessert,
};

const menu = [
  { category: 'Breakfast', name: 'Express', description: 'Coffee or tea, viennoiserie and juice', price: '10 DT', image: images.hero },
  { category: 'Breakfast', name: 'Lüma', description: 'Fruit, homemade yoghurt, egg, house bread and honey', price: '22 DT', image: images.table },
  { category: 'Breakfast', name: 'Brunch', description: 'Fresh juice, yoghurt, dates, omelette, cold cuts and fruit', price: '45 DT', image: images.hero },
  { category: 'Starters', name: 'Salade tunisienne', description: 'Tomato, cucumber, onion, pepper, olives, egg and tuna', price: '7 DT', image: images.detail },
  { category: 'Starters', name: 'Salade César', description: 'Chicken, lettuce, corn, tomato, croutons and parmesan', price: '14 DT', image: images.detail },
  { category: 'Starters', name: 'Trio de salades', description: 'Mechouia, Tunisian salad and omek houria', price: '8 DT', image: images.detail },
  { category: 'Starters', name: 'Brik à l’œuf', description: 'Crispy pastry, egg and herbs', price: '5 DT', image: images.detail },
  { category: 'Starters', name: 'Soupe de crevettes', description: 'Homemade soup with shrimp and herbs', price: '15 DT', image: images.food },
  { category: 'Pizza', name: 'Margherita', description: 'Tomato, mozzarella, basil and oregano', price: '15 DT', image: images.table },
  { category: 'Pizza', name: 'Regina', description: 'Turkey ham, mushrooms and mozzarella', price: '18 DT', image: images.table },
  { category: 'Pizza', name: 'Vegetariana', description: 'Aubergine, courgette, pepper, artichoke and mushrooms', price: '17 DT', image: images.table },
  { category: 'Pizza', name: 'Pesto', description: 'Fresh tomato, pesto and pine nuts', price: '24 DT', image: images.table },
  { category: 'Pizza', name: 'Hollywood', description: 'Tuna, parsley, black olives and fresh tomato', price: '24 DT', image: images.table },
  { category: 'Main', name: 'Blanc de poulet grillé', description: 'Grilled chicken breast with a side of your choice', price: '18 DT', image: images.food },
  { category: 'Main', name: 'Poulet sauce champignons', description: 'Chicken with creamy mushroom sauce', price: '22 DT', image: images.food },
  { category: 'Main', name: 'Dorade grillée', description: 'Grilled fish of the day', price: '22 DT', image: images.food },
  { category: 'Main', name: 'Fruits de mer à l’ail', description: 'Garlic, parsley and fresh seafood', price: '29 DT', image: images.food },
  { category: 'Main', name: 'Grillade mixte', description: 'Merguez, liver and lamb chops', price: '35 DT', image: images.food },
  { category: 'Pasta & Rice', name: 'Puttanesca', description: 'Spicy tomato sauce, capers and olives', price: '18 DT', image: images.table },
  { category: 'Pasta & Rice', name: 'Carbonara', description: 'Cream, egg and charcuterie', price: '18 DT', image: images.table },
  { category: 'Pasta & Rice', name: 'Bolognaise', description: 'Slow-cooked meat ragù', price: '20 DT', image: images.table },
  { category: 'Pasta & Rice', name: 'Tagliatelle norvégienne', description: 'Rosé sauce, shrimp, garlic and basil', price: '28 DT', image: images.table },
  { category: 'Pasta & Rice', name: 'Lasagne bolognaise', description: 'Fresh pasta, ragù and béchamel', price: '20 DT', image: images.table },
  { category: 'Ojja', name: 'Ojja merguez', description: 'Tomato, pepper, eggs and merguez', price: '18 DT', image: images.food },
  { category: 'Ojja', name: 'Ojja fruits de mer', description: 'Tomato, pepper, eggs and seafood', price: '25 DT', image: images.food },
  { category: 'Ojja', name: 'Omelette au fromage', description: 'Eggs and melted cheese', price: '6 DT', image: images.food },
  { category: 'Sandwiches', name: 'Makloub thon', description: 'Tuna, fresh vegetables and house sauces', price: '8.5 DT', image: images.table },
  { category: 'Sandwiches', name: 'Makloub escalope panée', description: 'Crispy chicken, fresh vegetables and sauce', price: '10.5 DT', image: images.table },
  { category: 'Sandwiches', name: 'Makloub mexicain', description: 'Minced meat, pepperoni and cheese', price: '12 DT', image: images.table },
  { category: 'Crepes & Waffles', name: 'Crêpe Nutella banane', description: 'Nutella and fresh banana', price: '11 DT', image: images.detail },
  { category: 'Crepes & Waffles', name: 'Crêpe fruits de mer', description: 'Seafood gratinée with melted cheese', price: '17 DT', image: images.food },
  { category: 'Crepes & Waffles', name: 'Gaufre Big Chock', description: 'Nutella, nuts, M&M’s, Oreo and ice cream', price: '16 DT', image: images.detail },
  { category: 'Crepes & Waffles', name: 'Pancake Nutella', description: 'Soft pancakes with generous Nutella', price: '10 DT', image: images.detail },
  { category: 'Dessert', name: 'Tiramisu', description: 'Mascarpone, coffee and cacao', price: '10 DT', image: images.detail },
  { category: 'Dessert', name: 'Fondant', description: 'Warm chocolate fondant', price: '8 DT', image: images.detail },
  { category: 'Dessert', name: 'Cheesecake', description: 'Caramel, Nutella or speculoos', price: '10 DT', image: images.detail },
  { category: 'Dessert', name: 'Saint Sébastien', description: 'Homemade baked cheesecake', price: '12 DT', image: images.detail },
  { category: 'Drinks', name: 'Expresso', description: 'Short coffee', price: '3 DT', image: images.hero },
  { category: 'Drinks', name: 'Thé à la menthe fraîche', description: 'Fresh mint green tea', price: '2.5 DT', image: images.hero },
  { category: 'Drinks', name: 'Iced Spanish Latte', description: 'Cold latte, smooth and generous', price: '10 DT', image: images.hero },
  { category: 'Drinks', name: 'Frappuccino Lüma', description: 'Nutella and pistachio iced coffee', price: '14 DT', image: images.hero },
];

const categoryCards = [
  { label: 'Pizzas', note: 'Wood-fired', image: menuImages.Pizza, hash: 'Pizza' },
  { label: 'Main dishes', note: 'Seafood & grills', image: menuImages.Main, hash: 'Main' },
  { label: 'Ojja', note: 'Tunisian classics', image: menuImages.Ojja, hash: 'Ojja' },
  { label: 'Sandwiches', note: 'Makloub & Lebanese', image: menuImages.Sandwiches, hash: 'Sandwiches' },
  { label: 'Crêpes', note: 'Sweet & savoury', image: menuImages['Crepes & Waffles'], hash: 'Crepes & Waffles' },
  { label: 'Breakfast', note: 'Formulas & brunch', image: menuImages.Breakfast, hash: 'Breakfast' },
];

const ADMIN_PASSWORD = 'luma-admin-2026';

function App() {
  const [category, setCategory] = useState('All');
  const [reservationSent, setReservationSent] = useState(false);
  const [isAdmin, setIsAdmin] = useState(() => window.location.hash === '#admin');
  const [isMenuPage, setIsMenuPage] = useState(() => window.location.hash === '#menu-page');
  const [adminUnlocked, setAdminUnlocked] = useState(() => window.sessionStorage.getItem('luma-admin-unlocked') === 'true');
  const [reservations, setReservations] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem('luma-reservations') || '[]');
    } catch {
      return [];
    }
  });
  useEffect(() => {
    function syncReservations(event) {
      if (event.key !== 'luma-reservations') return;
      try {
        setReservations(JSON.parse(event.newValue || '[]'));
      } catch {
        setReservations([]);
      }
    }

    window.addEventListener('storage', syncReservations);
    return () => window.removeEventListener('storage', syncReservations);
  }, []);
  const categories = ['All', ...new Set(menu.map((item) => item.category))];
  const filteredMenu = category === 'All' ? menu : menu.filter((item) => item.category === category);

  function openAdmin(event) {
    event.preventDefault();
    window.history.pushState({}, '', '#admin');
    setIsAdmin(true);
  }

  function closeAdmin(event) {
    event.preventDefault();
    window.history.pushState({}, '', '#home');
    setIsAdmin(false);
  }

  function openMenu(event) {
    event.preventDefault();
    window.history.pushState({}, '', '#menu-page');
    setIsMenuPage(true);
  }

  function closeMenu(event) {
    event.preventDefault();
    window.history.pushState({}, '', '#home');
    setIsMenuPage(false);
  }

  function handleReservation(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const reservation = {
      id: Date.now(),
      name: formData.get('name'),
      guests: formData.get('guests'),
      date: formData.get('date'),
      time: formData.get('time'),
      createdAt: new Date().toISOString(),
    };
    const nextReservations = [reservation, ...reservations];
    window.localStorage.setItem('luma-reservations', JSON.stringify(nextReservations));
    setReservations(nextReservations);
    setReservationSent(true);
    const message = [
      'New Luma reservation request',
      `Name: ${reservation.name}`,
      `Guests: ${reservation.guests}`,
      `Date: ${reservation.date}`,
      `Time: ${reservation.time}`,
    ].join('\n');
    window.open(`https://wa.me/21697337588?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    event.currentTarget.reset();
  }

  function handleMenuOrder({ name, tableNumber, items }) {
    const order = {
      id: Date.now(),
      name,
      tableNumber,
      guests: 'Food order',
      date: 'Today',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      items,
      createdAt: new Date().toISOString(),
    };
    const nextReservations = [order, ...reservations];
    window.localStorage.setItem('luma-reservations', JSON.stringify(nextReservations));
    setReservations(nextReservations);
    const message = [
      'New Luma food order',
      `Customer: ${name}`,
      `Table: ${tableNumber}`,
      'Order:',
      ...items.map((item) => `${item.quantity} x ${item.name} - ${item.price}`),
    ].join('\n');
    window.open(`https://wa.me/21697337588?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  if (isAdmin) {
    if (!adminUnlocked) {
      return <AdminLogin onBack={closeAdmin} onUnlock={() => {
        window.sessionStorage.setItem('luma-admin-unlocked', 'true');
        setAdminUnlocked(true);
      }} />;
    }
    return <AdminPanel reservations={reservations} onBack={closeAdmin} onClear={() => {
      window.localStorage.removeItem('luma-reservations');
      setReservations([]);
    }} onLock={() => {
      window.sessionStorage.removeItem('luma-admin-unlocked');
      setAdminUnlocked(false);
    }} />;
  }

  if (isMenuPage) {
    return <MenuPage categories={categories} category={category} setCategory={setCategory} filteredMenu={filteredMenu} onBack={closeMenu} onOrder={handleMenuOrder} />;
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Lüma home"><img className="wordmark-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/luma-HwESmG9hmyji1cEdKLVdsOZT40ZIfs.jpeg" alt="Lüma Kitchen & More" /></a>
        <nav className="nav-links" aria-label="Main navigation"><a href="#home">Home</a><a href="#menu-page" onClick={openMenu}>Menu</a><a href="#about">About</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></nav>
        <a className="nav-cta" href="#reservation">Book a table <span>↘</span></a>
      </header>

      <main>
        <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(90deg, rgba(12,9,7,.86), rgba(12,9,7,.2)), url("${images.hero}")` }}><div className="hero-copy"><p className="eyebrow">Italian kitchen · El Kef · Tunisia</p><h1>Taste the<br /><em>difference.</em></h1><p className="hero-intro">Authentic flavors. Modern experience. A warm table where Italian craft meets the generous spirit of El Kef.</p><div className="hero-actions"><a className="button button-dark" href="#menu-page" onClick={openMenu}>View menu <span>↓</span></a><a className="button button-outline" href="#reservation">Book a table <span>↘</span></a></div></div><div className="hero-note">Wood-fired<br /><strong>since 2026</strong></div></section>

        <section className="category-section section-wrap" aria-label="Explore our menu categories"><div className="section-kicker">Explore Lüma</div><div className="category-grid">{categoryCards.map((item) => <a className="category-card" href="#menu-page" onClick={openMenu} key={item.label}><div className="category-image" style={{ backgroundImage: `url("${item.image}")` }} /><div className="category-veil" /><div className="category-copy"><span>{item.note}</span><h3>{item.label}</h3></div></a>)}</div></section>

        <section className="about section-wrap" id="about"><div className="about-photo" style={{ backgroundImage: `url("${images.room}")` }}><span>Inside Lüma</span></div><div className="about-copy"><div className="section-kicker">01 / La maison</div><h2>A table made<br /><em>to gather.</em></h2><p className="large-copy">Lüma is a neighborhood trattoria in El Kef, built around honest food and generous moments.</p><p>Our pizzas rest for 48 hours, our sauces simmer slowly, and our desserts are made fresh each morning. Italian classics, Tunisian favorites and the kind of welcome that makes you stay for one more coffee.</p><a className="arrow-link" href="#contact">Our story <span>→</span></a></div></section>

        <section className="menu-teaser section-wrap"><div className="section-kicker">03 / Our menu</div><h2>Made with care,<br /><em>served with heart.</em></h2><p>Explore the full Lüma menu, from breakfast to wood-fired favourites.</p><a className="button button-dark" href="#menu-page" onClick={openMenu}>Open full menu <span>↗</span></a></section>

        <section className="special section-wrap"><div className="special-image" style={{ backgroundImage: `url("${images.fruitsDeMer}")` }} /><div className="special-copy"><div className="section-kicker">03 / Chef’s special</div><h2>Fruits de mer<br /><em>à l’ail.</em></h2><p>Fresh seafood, garlic, parsley and a little fire. A plate that brings the coast to El Kef.</p><div className="special-price">29 DT</div><a className="button button-dark" href="#reservation">Order now <span>↗</span></a></div></section>

        <section className="gallery section-wrap" id="gallery"><div className="gallery-heading"><div className="section-kicker">04 / Gallery</div><h2>A little look<br /><em>inside.</em></h2></div><div className="gallery-grid">{galleryImages.map((image, index) => <a className={`gallery-photo gallery-photo-${index + 1}`} href={image} target="_blank" rel="noreferrer" key={image}><div style={{ backgroundImage: `url("${image}")` }} /></a>)}</div></section>

        <section className="testimonial"><div className="section-kicker">05 / What our clients say</div><div className="stars">★★★★★</div><blockquote>“Amazing food, beautiful atmosphere and the warmest welcome in El Kef.”</blockquote><p>— A Lüma table guest</p></section>

        <section className="reservation section-wrap" id="reservation"><div><div className="section-kicker">06 / Book a table</div><h2>Save your<br /><em>place.</em></h2><p className="reservation-intro">Tell us when you are coming. Our team will confirm your table by phone.</p></div><form className="reservation-form" onSubmit={handleReservation}><label>Name<input name="name" type="text" placeholder="Your full name" required /></label><label>Guests<select name="guests" defaultValue="2" required><option>1 person</option><option>2 people</option><option>3 people</option><option>4 people</option><option>5+ people</option></select></label><label>Date<input name="date" type="date" required /></label><label>Time<select name="time" defaultValue="" required><option value="" disabled>Choose a time</option><option>12:00</option><option>13:00</option><option>19:00</option><option>20:00</option><option>21:00</option><option>22:00</option></select></label><button className="button button-dark" type="submit">Reserve now <span>↗</span></button>{reservationSent && <p className="reservation-success" role="status">Request received. We will confirm your table at <a href="tel:+21697337588">97 337 588</a>.</p>}</form></section>

        <section className="contact section-wrap" id="contact"><div className="contact-heading"><div className="section-kicker">07 / Contact</div><h2>Come<br /><em>say hello.</em></h2></div><div className="contact-details"><div><span>Address</span><strong>5PH4+7V, El Kef<br />Tunisia</strong></div><div><span>Phone</span><strong><a href="tel:+21697337588">97 337 588</a></strong></div><div><span>Opening hours</span><strong>Lunch · 12h–15h<br />Dinner · 19h–00h</strong></div><a className="button button-outline" href="https://maps.google.com/?q=5PH4%2B7V%20El%20Kef%20Tunisie" target="_blank" rel="noreferrer">Open map <span>↗</span></a></div></section>
      </main>

      <footer><a className="wordmark" href="#home"><img className="wordmark-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/luma-HwESmG9hmyji1cEdKLVdsOZT40ZIfs.jpeg" alt="Lüma Kitchen & More" /></a><div className="socials"><a href="https://instagram.com/luma_italian_kitchen" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/cocktail4saisons.kef/" target="_blank" rel="noreferrer">Facebook</a><a href="#contact">TikTok</a><a href="#admin" onClick={openAdmin}>Admin</a></div><p>© 2026 Lüma Kitchen &amp; More</p></footer>
    </div>
  );
}

function MenuPage({ categories, category, setCategory, filteredMenu, onBack, onOrder }) {
  const [cart, setCart] = useState([]);
  const [orderSent, setOrderSent] = useState(false);
  const [orderError, setOrderError] = useState(false);

  function addToCart(item) {
    setOrderSent(false);
    setCart((currentCart) => {
      const existingItem = currentCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return currentCart.map((cartItem) => cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
      }
      return [...currentCart, { name: item.name, price: item.price, quantity: 1 }];
    });
  }

  function removeFromCart(itemName) {
    setCart((currentCart) => currentCart.flatMap((item) => item.name === itemName ? (item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : []) : [item]));
  }

  function submitOrder(event) {
    event.preventDefault();
    if (!cart.length) {
      setOrderError(true);
      return;
    }
    const formData = new FormData(event.currentTarget);
    onOrder({ name: formData.get('name'), tableNumber: formData.get('tableNumber'), items: cart });
    setCart([]);
    setOrderSent(true);
    setOrderError(false);
    event.currentTarget.reset();
  }

  return (
    <div className="menu-page">
      <header className="admin-header menu-page-header">
        <a className="wordmark" href="#home" onClick={onBack}><img className="wordmark-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/luma-HwESmG9hmyji1cEdKLVdsOZT40ZIfs.jpeg" alt="Lüma Kitchen & More" /></a>
        <button className="button button-outline" type="button" onClick={onBack}>Back to site <span>↗</span></button>
      </header>
      <main className="menu-page-content">
        <div className="center-heading"><div className="section-kicker">Lüma / Full menu</div><h1>Made with care,<br /><em>served with heart.</em></h1><p>From breakfast and coffee to wood-fired favourites in El Kef.</p></div>
        <div className="menu-tabs" role="tablist">{categories.map((item) => <button id={`menu-page-${item}`} className={category === item ? 'active' : ''} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div>
        <div className="dish-grid menu-list">{filteredMenu.map((item) => <article className="dish-card" key={item.name}><div className="dish-content"><h2>{item.name}</h2><p>{item.description}</p><strong>{item.price}</strong><button className="menu-add" type="button" onClick={() => addToCart(item)}>Add to order <span>+</span></button></div></article>)}</div>
        <aside className="order-panel"><div><div className="section-kicker">Your order</div><h2>{cart.length ? `${cart.reduce((total, item) => total + item.quantity, 0)} item${cart.reduce((total, item) => total + item.quantity, 0) === 1 ? '' : 's'}` : 'Choose your dishes'}</h2>{cart.length > 0 && <div className="order-items">{cart.map((item) => <div className="order-item" key={item.name}><span>{item.quantity} x {item.name}</span><button type="button" onClick={() => removeFromCart(item.name)} aria-label={`Remove one ${item.name}`}>−</button></div>)}</div>}</div><form className="order-form" onSubmit={submitOrder}><label>Name<input name="name" type="text" placeholder="Your full name" required /></label><label>Table number<input name="tableNumber" type="number" min="1" placeholder="e.g. 4" required /></label><button className="button button-dark" type="submit">Send order <span>↗</span></button>{orderError && <p className="order-error" role="alert">Add at least one dish first.</p>}{orderSent && <p className="reservation-success" role="status">Order sent. The team will contact your table.</p>}</form></aside>
        <a className="button button-dark menu-page-book" href="#reservation" onClick={onBack}>Book a table <span>↗</span></a>
      </main>
    </div>
  );
}

function AdminLogin({ onBack, onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function handleLogin(event) {
    event.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onUnlock();
      return;
    }
    setError(true);
    setPassword('');
  }

  return (
    <div className="admin-shell admin-login-shell">
      <main className="admin-login">
        <a className="wordmark" href="#home" onClick={onBack}><img className="wordmark-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/luma-HwESmG9hmyji1cEdKLVdsOZT40ZIfs.jpeg" alt="Lüma Kitchen & More" /></a>
        <div className="section-kicker">Private area</div>
        <h1>Admin<br /><em>access.</em></h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="admin-password">Password</label>
          <input id="admin-password" type="password" value={password} onChange={(event) => { setPassword(event.target.value); setError(false); }} autoFocus required />
          {error && <p className="admin-login-error">Incorrect password.</p>}
          <button className="button button-dark" type="submit">Open dashboard <span>↗</span></button>
        </form>
        <button className="admin-back" type="button" onClick={onBack}>Back to site</button>
      </main>
    </div>
  );
}

function AdminPanel({ reservations, onBack, onClear, onLock }) {
  return (
    <div className="admin-shell">
      <header className="admin-header">
        <a className="wordmark" href="#home" onClick={onBack}><img className="wordmark-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/luma-HwESmG9hmyji1cEdKLVdsOZT40ZIfs.jpeg" alt="Lüma Kitchen & More" /></a>
        <div className="admin-actions"><button className="admin-lock" type="button" onClick={onLock}>Lock</button><button className="button button-outline" type="button" onClick={onBack}>Back to site <span>↗</span></button></div>
      </header>
      <main className="admin-content">
        <div className="section-kicker">Admin profile / Reservations</div>
        <div className="admin-title-row"><div><h1>Reservation<br /><em>requests.</em></h1><p>Every request submitted from this browser appears here.</p></div><strong className="admin-count">{reservations.length}<small>total requests</small></strong></div>
        {reservations.length === 0 ? <div className="admin-empty">No reservation requests yet.</div> : <div className="reservation-list">{reservations.map((reservation) => <article className="reservation-row" key={reservation.id}><div><strong>{reservation.name}</strong><span>{reservation.guests}</span>{reservation.items && <span>{reservation.items.map((item) => `${item.quantity} x ${item.name}`).join(', ')}</span>}</div><div><strong>Table {reservation.tableNumber || 'not specified'}</strong><span>{reservation.date} · {reservation.time}</span></div><a className="button button-dark" href={`https://wa.me/21697337588?text=${encodeURIComponent(`Follow up with ${reservation.name} at table ${reservation.tableNumber || 'not specified'}`)}`} target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a></article>)}</div>}
        {reservations.length > 0 && <button className="admin-clear" type="button" onClick={onClear}>Clear local requests</button>}
      </main>
    </div>
  );
}

export default App;
