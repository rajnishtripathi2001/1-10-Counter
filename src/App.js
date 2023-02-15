import './App.css';
import {useEffect,useState,React} from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  const Increment = ()=>{
    if (counter < 10) {
      setCounter(counter+1)
    }
  }

  const Decrement = ()=>{
    if (counter > 0) {
      setCounter(counter-1)
    }
  }

  useEffect(() => {
    const color=document.getElementById('count-text')
    if (counter<=4) {
      color.style.color='green'

    }
    else if (counter>4 && counter<=9) {
      color.style.color='blue'
    }
    else{
      color.style.color='red'
    }

  }, [counter])

  
  
  return (
    <div className="App">
    <h2>A Counter Application which Count from 0 to 10 <br/>
      and <br/>change color from 0-4 (Green) , 5-9(Blue) , 10 (Red)</h2>
    <div className='counter-container'>
      <h1>Count</h1>
      <h1 id='count-text'>{counter}</h1>
      
      <div className='btn-box'>
        <button id='inc' onClick={Increment}>Increment</button>
        <button id='dec' onClick={Decrement}>Decrement</button>
      </div>
    </div>
    <p>Made By <em><strong>Rajnish Tripathi</strong></em> - 12011284</p>
  </div>
  );
}

export default App;
