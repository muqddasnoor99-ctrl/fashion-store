
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";
import "./index.css";


const imageFiles = import.meta.glob("./public/*", {
  eager: true,
  query: "?url",
  import: "default"
});


function getImage(filename) {
  const found = Object.entries(imageFiles).find(([path]) =>
    path.split("/").pop().trim().toLowerCase() ===
    filename.trim().toLowerCase()
  );
  return found ? found[1] : "";
}


const products = [
  {
    id: 1,
    name: "Elegant Maxi Dress",
    category: "Clothing",
    type: "Maxi Dresses",
    price: 95000,
    images: ["lehnga 2.jpeg","red.jpeg","pink 1.jpeg","part dress 1.jpeg",]
  },
  {
    id: 2,
    name: " Beauiful lehnga",
    category: "Clothing",
    type: "Lehnga",
    price: 32000,
    images: ["lenga 4.jpeg","white.jpeg","purple.jpeg","lehnga 20.jpeg"]
  },
  {
    id: 3,
    name: "Party Wear Dress",
    category: "Clothing",
    type: "Party Wear",
    price: 50000,
    images: ["maxi 1.jpeg", "maxi 2.jpeg", "maxi 3.jpeg"]
  },
  {
    id: 4,
    name: "Elegant Formal Sari",
    category: "Clothing",
    type: "Formal Sari",
    price: 8000,
    images: ["sari7.jpeg","pink sari.jpeg","sari12.jpeg"]
  },
  {
    id: 5,
    name: "Beautiful Suite",
    category: "Clothing",
    type: "Suits",
    price: 4200,
    images: ["suite 1.jpeg","suite 6.jpeg","suite 5.jpeg","suite 3.jpeg"]
  },
  {
    id: 6,
    name: "Elegant  Abaya",
    category: "Clothing",
    type: "Abayas",
    price: 4500,
    images: ["abaya 1.jpeg","abaya 2.jpeg","abaya 3.jpeg","abaya 4.jpeg"]
  },
  {
    id: 7,
    name: "Golden Bracelet",
    category: "Jewellery",
    type: "Bracelets",
    price: 1200,
    images: ["braslit 1.jpeg", "braslit 7.jpeg", "Braslit 3.jpeg"]
  },
  {
    id: 8,
    name: "Pearl Earrings",
    category: "Jewellery",
    type: "Earrings",
    price: 2500,
    images: ["earing 2.jpeg","earing1.jpeg","earing 3.jpeg"]
  },
  {
    id: 9,
    name: "Luxury Necklace",
    category: "Jewellery",
    type: "Necklaces",
    price: 5000,
    images: ["jewelery 2.jpeg","jewelery 3.jpeg","jewelery 4.jpeg","jewelery 6.jpeg"]
  },
  {
    id: 10,
    name: "Beautiful Ring",
    category: "Jewellery",
    type: "Rings",
    price: 1000,
    images: ["ring 4.jpeg","ring6.jpeg","ring9.jpeg","ring 1.jpeg"]
  },
  {
    id: 11,
    name: "Golden Anklet",
    category: "Jewellery",
    type: "Anklets",
    price: 1100,
    images: ["Anklet 2.jpeg", "Anklets 3.jpeg","Anklets 1.jpeg",]
  },
  {
    id: 12,
    name: "Stylish Bangles",
    category: "Jewellery",
    type: "Bangles",
    price: 1400,
    images: ["bangle 4.jpeg", "bangle 3.jpeg", "bangle 1.jpeg"]
  },
  {
    id: 13,
    name: "Golden Heels",
    category: "Shoes",
    type: "Heels",
    price: 3200,
    images: ["shoes 1.jpeg","shoes2.jpeg","heel 2.jpeg","heel3.jpeg","heel1.jpeg"]
  },
  {
    id: 14,
    name: "Traditional Khussa",
    category: "Shoes",
    type: "Khussa",
    price: 1800,
    images: ["khusa 2.jpeg","khusa1.jpeg","khusa 3.jpeg"]
  },
  {
    id: 15,
    name: "Ladies Flats",
    category: "Shoes",
    type: "Flats",
    price: 2000,
    images: ["shoes 5.jpeg","flat 1.jpeg","flat 2.jpeg","flat 3.jpeg"]
  },
  {
    id: 16,
    name: "Stylish Sneakers",
    category: "Shoes",
    type: "Sneakers",
    price: 2800,
    images: ["sneaker 3.jpeg","sniker 1.jpeg","sneaker 2.jpeg"]
  },
  {
    id: 17,
    name: "Luxury Handbag",
    category: "Bags",
    type: "Handbags",
    price: 4000,
    images: ["bag2.jpeg", "bag3.jpeg", "bag4.jpeg"]
  },
  {
    id: 18,
    name: "Pink Shoulder Bag",
    category: "Bags",
    type: "Shoulder Bags",
    price: 2500,
    images: ["bag 17.jpeg","bag16.jpeg","bag15.jpeg"]
  },
  {
    id: 19,
    name: "Mini Party Bag",
    category: "Bags",
    type: "Party Bags",
    price: 3500,
    images: ["mini bag 4.jpeg","mini bag 3.jpeg","mini bag1.jpeg","mini bag 5.jpeg"]
  },
  {
    id: 20,
    name: "Luxury Perfume",
    category: "Beauty",
    type: "Perfumes",
    price: 2000,
    images: ["perfume 1.jpeg","perfume 2.jpeg","perfume 3.jpeg","perfume 4.jpeg"]
  },
  {
    id: 21,
    name: "Makeup Kit",
    category: "Beauty",
    type: "Makeup",
    price: 4100,
    images: ["Beauty 1.jpeg","beauty 2.jpeg","beauty 3.jpeg"]
  },
   {
    id: 22,
    name: "Sunglasses",
    category: "Accessories",
    type: "glasses",
    price: 1000,
    images: ["Glasses1.jpeg","Glasses 2.jpeg","Glasses 3.jpeg"]
  },
  {
    id: 23,
    name: "Watches",
    category: "Accessories",
    type: "Watches",
    price: 3000,
    images: ["watch 3.jpeg","watch 2.jpeg","watch 1.jpeg"]
  },
  {
    id: 24,
    name: "Scarf",
    category: "Accessories",
    type: "Scarf",
    price: 1500,
    images: ["sacrf 1.jpeg","scarf 2.jpeg","scarf 3.jpeg","src/public/scarf 4.jpeg","scarf 5.jpeg"]
  },
  {
    id: 25,
    name: "Caps",
    category: "Accessories",
    type: "Caps",
    price: 2100,
    images: ["cap 1.jpeg","cap 2.jpeg","cap 3.jpeg","cap 4.jpeg",""]
  },
].map(product => ({
  ...product,
  images: product.images.map(getImage).filter(Boolean),
  imageNames: product.images
}));

const homeImage = getImage("first page.jpeg");

const categories = [
  { name: "Clothing", icon: "👗", description: "Dresses, Abayas, Kurtis & Suits" },
  { name: "Jewellery", icon: "💎", description: "Rings, Earrings & Necklaces" },
  { name: "Shoes", icon: "👠", description: "Heels, Khussa & Flats" },
  { name: "Bags", icon: "👜", description: "Handbags & Party Bags" },
  { name: "Accessories", icon: "🕶️", description: "Watches & Sunglasses & Scarfs & Caps" },
  { name: "Beauty", icon: "💄", description: "Perfumes & Makeup" },
];

function ProductImage({ src, alt }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return <div className="image-placeholder">NOOR FASHION</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }}
    />
  );
}

function Header({ cart }) {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="logo">NOOR <span>FASHION</span></Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Collections</Link>
        <Link to="/shop">Shop All</Link>
        <Link to="/returns">Returns</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart ({count})</Link>
      </nav>
    </header>
  );
}

function Welcome() {
  return (
    <main className="welcome-page">
      <div className="welcome-content">
        <p className="welcome-small">THE WORLD OF ELEGANCE</p>
        <h1>Noor <span>Fashion</span></h1>
        
           <h2>Elegance Begins With You</h2>
        <p className="welcome-description">
          Discover beautiful fashion, timeless jewellery and
          elegant accessories made to celebrate your style.
        </p>
        <Link to="/categories" className="start-button">
          START SHOPPING <span>→</span>
        </Link>
        <p className="welcome-bottom">
          CLOTHING • JEWELLERY • BEAUTY • STYLE
        </p>
      </div>
      <div className="welcome-decoration">
        <ProductImage src={homeImage} alt="Noor Fashion" />
      </div>
    </main>
  );
}

function Categories() {
  return (
    <section className="section">
      <p className="eyebrow">EXPLORE OUR WORLD</p>
      <h1 className="page-title">Shop By Category</h1>
      <p className="page-subtitle">Find everything you love in one place.</p>
      <div className="category-grid">
        {categories.map(category => (
          <Link
            to={`/category/${category.name}`}
            className="category-card"
            key={category.name}
          >
            <span className="category-icon">{category.icon}</span>
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <span className="explore-link">EXPLORE →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image">
        <ProductImage src={product.images[0]} alt={product.name} />
      </Link>
      <div className="product-info">
        <p className="product-type">{product.type}</p>
        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>
        <h3>Rs. {product.price.toLocaleString("en-PK")}</h3>
        <button onClick={() => addToCart(product)}>ADD TO CART</button>
      </div>
    </article>
  );
}

function ProductGrid({ items, addToCart }) {
  if (!items.length) return <p className="empty">No products found.</p>;

  return (
    <div className="product-grid">
      {items.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

function CategoryPage({ addToCart }) {
  const { name } = useParams();
  const [selectedType, setSelectedType] = useState("All");

  const items = products.filter(
    p => p.category.toLowerCase() === name.toLowerCase()
  );

  const types = ["All", ...new Set(items.map(p => p.type))];

  const filtered = selectedType === "All"
    ? items
    : items.filter(p => p.type === selectedType);

  return (
    <section className="section">
      <p className="eyebrow">NOOR FASHION COLLECTION</p>
      <h1 className="page-title">{name} Collection</h1>
      <div className="filter-buttons">
        {types.map(type => (
          <button
            key={type}
            className={selectedType === type ? "filter active" : "filter"}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <ProductGrid items={filtered} addToCart={addToCart} />
    </section>
  );
}

function Shop({ addToCart }) {
  return (
    <section className="section">
      <h1 className="page-title">All Products</h1>
      <ProductGrid items={products} addToCart={addToCart} />
    </section>
  );
}

// PRODUCT DETAILS WITH MULTIPLE IMAGE GALLERY
function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return <h2 className="empty">Product not found.</h2>;

  const images = product.images;

  return (
    <section className="detail-section">
      <div className="detail-image">
        <ProductImage
          src={images[selectedImage]}
          alt={product.name}
        />
        {images.length > 1 && (
          <div className="product-gallery">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={selectedImage === index ? "active" : ""}
                style={{ width: 65, height: 65, padding: 2 }}
              >
                <ProductImage src={image} alt={`${product.name} ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="detail-info">
        <p className="eyebrow">{product.category} / {product.type}</p>
        <h1>{product.name}</h1>
        <h2>Rs. {product.price.toLocaleString("en-PK")}</h2>
        <p>Discover your perfect style with Noor Fashion Store.</p>
        <button
          className="start-button"
          onClick={() => {
            addToCart({ ...product, image: images[selectedImage] || "" });
            navigate("/cart");
          }}
        >
          ADD TO CART →
        </button>
        <p className="delivery">Cash on Delivery Available</p>
        <Link to={`/category/${product.category}`} className="back-link">
          ← Back to Collection
        </Link>
      </div>
    </section>
  );
}

function Cart({ cart, setCart }) {
  const updateQuantity = (id, amount) => {
    setCart(old =>
      old
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = total >= 3000 ? 0 : 200;

  if (!cart.length) {
    return (
      <section className="section empty">
        <h1>Your Cart Is Empty</h1>
        <Link to="/categories" className="start-button">SHOP NOW →</Link>
      </section>
    );
  }

  return (
    <section className="section">
      <h1 className="page-title">Your Shopping Cart</h1>
      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <div className="cart-image">
            <ProductImage src={item.image} alt={item.name} />
          </div>
          <div className="cart-details">
            <h3>{item.name}</h3>
            <p>Rs. {item.price.toLocaleString("en-PK")}</p>
            <div className="quantity">
              <button onClick={() => updateQuantity(item.id, -1)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
          </div>
          <button
            className="remove-btn"
            onClick={() => setCart(old => old.filter(p => p.id !== item.id))}
          >
            REMOVE
          </button>
        </div>
      ))}
      <div className="cart-total">
        <h2>Subtotal: Rs. {total.toLocaleString("en-PK")}</h2>
        <p>Shipping: {shipping === 0 ? "Free" : `Rs. ${shipping}`}</p>
        <h2>Grand Total: Rs. {(total + shipping).toLocaleString("en-PK")}</h2>
        <button
          className="start-button"
          onClick={() => alert("Demo order placed successfully!")}
        >
          PLACE ORDER
        </button>
      </div>
    </section>
  );
}

function Returns() {
  const [form, setForm] = useState({
    orderId: "", product: "", type: "Return", reason: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.product || !form.reason.trim()) {
      alert("Please select a product and enter a reason.");
      return;
    }

    const oldRequests = JSON.parse(localStorage.getItem("noorReturns") || "[]");
    localStorage.setItem("noorReturns", JSON.stringify([
      ...oldRequests,
      { ...form, date: new Date().toLocaleDateString() }
    ]));

    alert("Your return/exchange request has been saved!");
    setForm({ orderId: "", product: "", type: "Return", reason: "" });
  };

  return (
    <section className="form-section">
      <p className="eyebrow">CUSTOMER SERVICE</p>
      <h1 className="page-title">Return & Exchange</h1>
      <p className="page-subtitle">Send us your return or exchange request.</p>
      <form className="customer-form" onSubmit={handleSubmit}>
        <label>Order ID</label>
        <input
          value={form.orderId}
          onChange={e => setForm({ ...form, orderId: e.target.value })}
          placeholder="Enter your order ID"
        />
        <label>Select Product</label>
        <select
          value={form.product}
          onChange={e => setForm({ ...form, product: e.target.value })}
          required
        >
          <option value="">Choose a product</option>
          {products.map(p => <option key={p.id}>{p.name}</option>)}
        </select>
        <label>Request Type</label>
        <select
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
        >
          <option>Return</option>
          <option>Exchange</option>
        </select>
        <label>Reason</label>
        <textarea
          value={form.reason}
          onChange={e => setForm({ ...form, reason: e.target.value })}
          placeholder="Explain your reason..."
          required
        />
        <button className="start-button" type="submit">SUBMIT REQUEST</button>
      </form>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", subject: "", message: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    const oldMessages = JSON.parse(localStorage.getItem("noorMessages") || "[]");
    localStorage.setItem("noorMessages", JSON.stringify([
      ...oldMessages,
      { ...form, date: new Date().toLocaleDateString() }
    ]));
    alert("Thank you for contacting Noor Fashion!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="form-section">
      <p className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</p>
      <h1 className="page-title">Contact Us</h1>
      <p className="page-subtitle">Have a question? Send us a message.</p>
      <form className="customer-form" onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder="Enter your name"
          required
        />
        <label>Email Address</label>
        <input
          type="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          placeholder="Enter your email"
          required
        />
        <label>Subject</label>
        <input
          value={form.subject}
          onChange={e => setForm({ ...form, subject: e.target.value })}
          placeholder="Enter subject"
        />
        <label>Your Message</label>
        <textarea
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          placeholder="Write your message here..."
          required
        />
        <button className="start-button" type="submit">SEND MESSAGE</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <h2>NOOR FASHION</h2>
      <p>Elegance Begins With You</p>
      <p>Clothing • Jewellery • Beauty • Style</p>
      <p>© 2026 Noor Fashion Store. All Rights Reserved.</p>
    </footer>
  );
}

function AppContent() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("noorCart")) || [];
    } catch {
      return [];
    }
  });

  const changeCart = updated => {
    setCart(updated);
    localStorage.setItem("noorCart", JSON.stringify(updated));
  };

  const addToCart = product => {
    setCart(old => {
      const existing = old.find(item => item.id === product.id);
      const updated = existing
        ? old.map(item =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  image: product.image || item.image
                }
              : item
          )
        : [...old, { ...product, quantity: 1 }];

      localStorage.setItem("noorCart", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/category/:name" element={<CategoryPage addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={changeCart} />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2 className="empty">Page Not Found</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
