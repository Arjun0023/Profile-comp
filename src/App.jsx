import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './Components/Assets/ProfileCard/ProfileCard'


function App(){
  return(
      <div className = "App">
      <UserProfile/>
      </div>
  )
}

export default UserProfile
