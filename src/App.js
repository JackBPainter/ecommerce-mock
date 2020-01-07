import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const start_time = 5

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(start_time);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0)

  const textAreaRef = useRef();


  const handleChange = (e) => {
    setText(e.target.value)
  }

  const calculateWordCount = (text) => { // The text in the argument will not mutate the text in state as it's been passed down
    return text.trim().split(" ").filter(word => word !== "").length
  }

  const startGame = () => {
    setIsTimeRunning(true)
    setTimeRemaining(start_time)
    setText("")
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
  }

  const endGame = () => {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else {
      endGame()
    }

  }, [timeRemaining, isTimeRunning])

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={textAreaRef}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button
        disabled={isTimeRunning}
        onClick={startGame}
      >
        Start Game
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
