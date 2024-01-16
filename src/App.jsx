// src/App.js
import React from 'react';
import Profile from './Profile';

const App = () => {
  const user = {
    name: 'John Doe',
    age: 25,
    bio: 'A passionate developer.'
  };

  return (
    <div>
      <h1>My App</h1>
      <Profile {...user} />
    </div>
  );
};

export default App;
