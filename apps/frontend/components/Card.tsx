import React from 'react';

interface CardProps {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ header, content, footer }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b">
        {header}
      </div>
      <div className="p-4">
        {content}
      </div>
      <div className="p-4 border-t">
        {footer}
      </div>
    </div>
  );
};

export default Card;
