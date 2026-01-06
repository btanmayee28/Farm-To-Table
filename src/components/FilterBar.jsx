import { useState } from 'react';
import './FilterBar.css';

const FilterBar = ({ onFilterChange, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [organicOnly, setOrganicOnly] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange({ category, organicOnly });
  };

  const handleOrganicToggle = () => {
    const newOrganicOnly = !organicOnly;
    setOrganicOnly(newOrganicOnly);
    onFilterChange({ category: selectedCategory, organicOnly: newOrganicOnly });
  };

  return (
    <div className="filter-bar">
      <div className="category-filters">
        <button
          className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('all')}
        >
          All Products
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="organic-filter">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={organicOnly}
            onChange={handleOrganicToggle}
          />
          <span>🌱 Organic Only</span>
        </label>
      </div>
    </div>
  );
};

export default FilterBar;
