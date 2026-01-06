import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { fetchProductById } from '../services/api';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const data = await fetchProductById(parseInt(id));
      setProduct(data);
      setLoading(false);
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <div className="product-details-container">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} />
          {product.organic && <span className="organic-badge-large">🌱 Certified Organic</span>}
        </div>

        <div className="product-info-section">
          <h1>{product.name}</h1>
          <p className="product-price-large">₹{product.price.toFixed(2)}/{product.unit}</p>
          
          <div className="product-farm-link">
            <span>From: </span>
            <Link to={`/farms/${product.farmId}`}>{product.farmName}</Link>
          </div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.fullDescription}</p>
          </div>

          <div className="product-details-info">
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Stock:</strong> {product.stock} {product.unit}s available</p>
            {product.harvestDate && (
              <p><strong>Harvest Date:</strong> {product.harvestDate}</p>
            )}
          </div>

          <div className="product-actions">
            <div className="quantity-selector">
              <button 
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>

            <button 
              className={`add-to-cart-btn-large ${addedToCart ? 'added' : ''}`}
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
          </div>

          {product.stock === 0 && (
            <p className="out-of-stock">Out of Stock</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
