import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom'

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, link}) => {
  return (
    <div className="card">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            
        <div className="content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <Link to={link}><button>See more</button></ Link>
        </div>
    </div>
  );
};

export default Card;
