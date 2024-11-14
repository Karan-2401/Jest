import logo from './logo.svg';
import './App.css';
import Day6 from './Day6';
import { useState } from 'react';

function App() {
  const [state,setState] = useState()
  return (
    <div className="App">
      <p>Hi hello namste!</p>
      <p>KemCho</p>
      <img src='' title='Karan'/>
      <input type='text' placeholder='enter'/>

      <h1>{state}</h1>
      <button onClick={()=>{setState("Superman")}}>Click day 7</button>
      <Day6/>
    </div>
  );
}

export default App;
