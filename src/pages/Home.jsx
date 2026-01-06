import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchFeaturedProducts } from '../services/api';
import './Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      setLoading(true);
      const products = await fetchFeaturedProducts();
      setFeaturedProducts(products);
      setLoading(false);
    };

    loadFeaturedProducts();
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Fresh from Local Farms to Your Table</h1>
          <p>Support local farmers and enjoy the freshest organic produce delivered right to your door</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">🌾</div>
          <h3>Local & Fresh</h3>
          <p>Products sourced directly from nearby farms</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🌱</div>
          <h3>Organic Options</h3>
          <p>Certified organic produce available</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>Same-day delivery for maximum freshness</p>
        </div>
        <div className="feature">
          <div className="feature-icon">❤️</div>
          <h3>Support Local</h3>
          <p>Help your community's farmers thrive</p>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        {loading ? (
          <div className="loading">Loading featured products...</div>
        ) : (
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        <div className="view-all-container">
          <Link to="/products" className="view-all-link">View All Products →</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
