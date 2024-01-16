// src/Profile.js
import React from 'react';

const Profile = ({ name, age, bio }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default Profile;
