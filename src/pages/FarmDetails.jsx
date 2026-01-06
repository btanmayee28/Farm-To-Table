import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { fetchFarmById, fetchProductsByFarm } from '../services/api';
import './FarmDetails.css';

const FarmDetails = () => {
  const { id } = useParams();
  const [farm, setFarm] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFarmDetails = async () => {
      setLoading(true);
      const farmData = await fetchFarmById(parseInt(id));
      const productsData = await fetchProductsByFarm(parseInt(id));
      setFarm(farmData);
      setProducts(productsData);
      setLoading(false);
    };

    loadFarmDetails();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading farm details...</div>;
  }

  if (!farm) {
    return (
      <div className="not-found">
        <h2>Farm not found</h2>
        <Link to="/farms">Back to Farms</Link>
      </div>
    );
  }

  return (
    <div className="farm-details">
      <div className="farm-header">
        <img src={farm.image} alt={farm.name} className="farm-banner" />
        <div className="farm-header-content">
          <h1>{farm.name}</h1>
          <p className="location">📍 {farm.location}</p>
        </div>
      </div>

      <div className="farm-content">
        <section className="farm-info-section">
          <h2>About the Farm</h2>
          <p className="farm-description-full">{farm.fullDescription}</p>
          
          <div className="farm-certifications">
            <h3>Certifications & Practices</h3>
            <div className="cert-tags">
              {farm.certifications.map((cert, index) => (
                <span key={index} className="cert-tag">{cert}</span>
              ))}
            </div>
          </div>

          <div className="farm-contact">
            <h3>Contact Information</h3>
            <p>📧 {farm.email}</p>
            <p>📞 {farm.phone}</p>
          </div>
        </section>

        <section className="farm-products-section">
          <h2>Products from {farm.name}</h2>
          {products.length > 0 ? (
            <div className="products-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p>No products available from this farm at the moment.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default FarmDetails;
