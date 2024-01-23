import { useState } from 'react';
import './App.css'

const ParaGenrator = ()=>{
  const [wordLength, setWordLenght] = useState(5);
  const[genratedPara , setGenratedPara] = useState('');

  const genratePara = ()=>{
    const words = [
      'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
      'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor',
      'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 
      'aliqua','Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
      'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor',
      'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 
      'aliqua'
    ];

    const paragraph = Array.from({length:wordLength},()=>{
      const randomIndex = Math.floor(Math.random()*wordLength);
      return words[randomIndex];
    }).join('');
    setGenratedPara(paragraph);
  };

  return (
    <div>
    <label>
    Enter the Number of words:
    <input type="number" value={wordLength}onChange={(e)=> setWordLenght(e.target.value)}></input>
    </label>
    <button onClick={genratePara}>Genrate Paragraph</button>
    <p>{genratedPara}</p>
    </div>
  )
  }

export default ParaGenrator;
