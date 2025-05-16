import React from 'react';
import { useRouter } from 'next/router';
import ImageGallery from 'react-image-gallery';
import BookingWidget from '../../components/BookingWidget';
import LocationMap from '../../components/LocationMap';
import '../../styles/destination.css';

const DestinationDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const images = [
    {
      original: '/images/destination1.jpg',
      thumbnail: '/images/destination1_thumb.jpg',
    },
    {
      original: '/images/destination2.jpg',
      thumbnail: '/images/destination2_thumb.jpg',
    },
    {
      original: '/images/destination3.jpg',
      thumbnail: '/images/destination3_thumb.jpg',
    },
  ];

  return (
    <div className="destination-detail-container">
      <h1>Destination Details for {id}</h1>
      <section className="image-gallery-section">
        <ImageGallery items={images} />
      </section>
      <section className="booking-widget-section">
        <BookingWidget destinationId={id} />
      </section>
      <section className="location-map-section">
        <LocationMap destinationId={id} />
      </section>
    </div>
  );
};

export default DestinationDetailPage;
