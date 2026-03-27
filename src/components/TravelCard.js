import React from 'react';
import LikeButton from './LikeButton';

function TravelCard({ travel, onDoubleClick, onLike }) {
  return (
    <div className="travel-card" onDoubleClick={onDoubleClick}>
      <div className="card-header">
        <span className="country-badge">{travel.country}</span>
      </div>
      <div className="card-body">
        <h3 className="travel-title">{travel.title}</h3>
        <p className="travel-description">{travel.description}</p>
      </div>
      <div className="card-footer">
        <LikeButton likes={travel.likes} onLike={() => onLike(travel.id)} />
      </div>
    </div>
  );
}

export default TravelCard;