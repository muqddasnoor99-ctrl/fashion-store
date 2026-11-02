
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Blue Casual Outfit",
    price: 1999,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500",
    category: "Women",
  },
  {
    id: 2,
    name: "Summer Yellow Outfit",
    price: 2499,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500",
    category: "Women",
  },
  {
    id: 3,
    name: "Men's Casual Shirt",
    price: 1799,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
    category: "Men",
  },
  {
    id: 4,
    name: "Elegant Fashion Dress",
    price: 2999,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
    category: "Women",
  },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  function addToCart(product) {
    setCart([...cart, product]);
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shop">
      <section className="shop-hero">
        <p className="eyebrow">NOOR FASHION COLLECTION</p>
        <h1>Discover Your Style</h1>
        <p>Beautiful fashion for every day.</p>
        <a href="#products" className="shop-button">
          Shop Now
        </a>
      </section>

      <section className="container" id="products">
        <div className="shop-heading">
          <div>
            <p className="eyebrow">OUR COLLECTION</p>
            <h2>Featured Products</h2>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="cart-count">
              🛒 Cart: {cart.length}
            </span>
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <span>{product.category}'S COLLECTION</span>
                <h3>{product.name}</h3>
                <p>Rs. {product.price.toLocaleString()}</p>
                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p>No products found. Try another search.</p>
        )}

        <section className="shop-promise">
          <p className="eyebrow">OUR PROMISE</p>
          <h2>Fashion That Feels Like You.</h2>
          <p>We believe every outfit should make you feel confident and special.</p>
          <div className="promise-grid">
            <div>
              <h3>🚚 Easy Shopping</h3>
              <p>Simple online ordering</p>
            </div>
            <div>
              <h3>✨ Curated Styles</h3>
              <p>Styles for every day</p>
            </div>
            <div>
              <h3>💗 Made for You</h3>
              <p>Find your own look</p>
            </div>
          </div>
        </section>

        <footer className="shop-footer">
          <h3>Noor Fashion</h3>
          <p>Your style, your story.</p>
          <p>Contact: noorfashion@example.com</p>
          <p>© 2026 Noor Fashion. Student E-Commerce Project.</p>
        </footer>
      </section>
    </div>
  );
}
