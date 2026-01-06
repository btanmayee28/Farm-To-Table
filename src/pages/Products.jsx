import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import { fetchProducts } from '../services/api';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['Vegetables', 'Fruits', 'Dairy', 'Meat', 'Eggs', 'Grains'];

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, []);

  const handleFilterChange = ({ category, organicOnly }) => {
    let filtered = products;

    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    if (organicOnly) {
      filtered = filtered.filter(product => product.organic);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Fresh, local, and sustainably sourced</p>
      </div>

      <FilterBar 
        onFilterChange={handleFilterChange} 
        categories={categories}
      />

      {loading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <>
          <div className="products-count">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="no-products">
              No products found matching your filters.
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
