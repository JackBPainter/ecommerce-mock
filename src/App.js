import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  console.log(isTimeRunning)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const calculateWordCount = (text) => { // The text in the argument will not mutate the text in state as it's been passed down
    console.log(text.trim().split(" ").filter(word => word !== "").length)
    return text.trim().split(" ").filter(word => word !== "").length
  }

  useEffect(() => {
      if (isTimeRunning && timeRemaining > 0) {
        setTimeout(() => {
          setTimeRemaining(time => time - 1)
        }, 1000)
      } else {
        setIsTimeRunning(false)
      }
    
  }, [timeRemaining, isTimeRunning])

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <textarea onChange={handleChange} />
      <h4>Time Remaining: {timeRemaining}</h4>
<button onClick={() => setIsTimeRunning(true) && calculateWordCount(text)}>Start Game</button>
      <h1>Word Count: </h1>
    </div>
  );
}

export default App;
