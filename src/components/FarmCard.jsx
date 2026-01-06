import { Link } from 'react-router-dom';
import './FarmCard.css';

const FarmCard = ({ farm }) => {
  return (
    <Link to={`/farms/${farm.id}`} className="farm-card">
      <div className="farm-image">
        <img src={farm.image} alt={farm.name} />
      </div>
      <div className="farm-info">
        <h3 className="farm-name">{farm.name}</h3>
        <p className="farm-location">📍 {farm.location}</p>
        <p className="farm-description">{farm.description}</p>
        <div className="farm-tags">
          {farm.certifications.map((cert, index) => (
            <span key={index} className="farm-tag">{cert}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default FarmCard;
