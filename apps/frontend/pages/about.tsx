import React from 'react';
import '../styles/about.css';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    bio: 'John has over 20 years of experience in the travel industry.',
    image: '/images/john.jpg',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    bio: 'Jane is a tech enthusiast with a passion for travel.',
    image: '/images/jane.jpg',
  },
  {
    name: 'Alice Johnson',
    position: 'COO',
    bio: 'Alice ensures everything runs smoothly at our company.',
    image: '/images/alice.jpg',
  },
];

const companyStats = [
  { label: 'Years in Business', value: '10' },
  { label: 'Happy Clients', value: '5000+' },
  { label: 'Destinations', value: '100+' },
];

const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <h2>Company Stats</h2>
        <div className="stats">
          {companyStats.map((stat, index) => (
            <div key={index} className="stat">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <h2>Our Gallery</h2>
        <div className="gallery">
          <img src="/images/gallery1.jpg" alt="Gallery Image 1" />
          <img src="/images/gallery2.jpg" alt="Gallery Image 2" />
          <img src="/images/gallery3.jpg" alt="Gallery Image 3" />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
