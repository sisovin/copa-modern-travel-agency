import React from 'react';

interface DestinationCardProps {
  image: string;
  title: string;
  price: string;
  rating: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, title, price, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{price}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">{rating} ★</span>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
