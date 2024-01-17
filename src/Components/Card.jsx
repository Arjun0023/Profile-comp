import React, { useState } from 'react';
import './Card.css';

function Card() {
  const [name, setName] = useState('Your Name');
  const [job, setJob] = useState('Your job');
  const [about, setAbout] = useState('LoremIpser About Section');

  return (
    <div className='Card'>
      <div className='upper-container'>
        <div className='image-container'>
          <img src='public\prof.jpg' alt='' height='100px' width='100px' />
        </div>
      </div>
      <div className='lower-container'>
        <h1 style={{ textAlign: 'center' }}>{name}</h1>
        <h2 style={{ textAlign: 'center' }}>{job}</h2>
        <p style={{ textAlign: 'center' }}>{about}</p>
        <button style={{ display: 'block', margin: '0 auto' }}>
          Visit Profile
        </button>
      </div>
    </div>
  );
}

export default Card;
