import { useState, useEffect } from 'react';
import FarmCard from '../components/FarmCard';
import { fetchFarms } from '../services/api';
import './Farms.css';

const Farms = () => {
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFarms = async () => {
      setLoading(true);
      const data = await fetchFarms();
      setFarms(data);
      setLoading(false);
    };

    loadFarms();
  }, []);

  return (
    <div className="farms-page">
      <div className="page-header">
        <h1>Meet Our Farms</h1>
        <p>Get to know the local farmers who grow your food</p>
      </div>

      {loading ? (
        <div className="loading">Loading farms...</div>
      ) : (
        <div className="farms-grid">
          {farms.map(farm => (
            <FarmCard key={farm.id} farm={farm} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Farms;
