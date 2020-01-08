import React from 'react';
import './App.css';
import useTypingGame from "./useTypingGame"

function App() {
  const [
    handleChange, 
    text, 
    isTimeRunning, 
    startGame, 
    wordCount, 
    timeRemaining, 
    textAreaRef
  ] = useTypingGame(10)

  // const startGame = () => {
  //   setIsTimeRunning(true)
  //   setTimeRemaining(start_time)
  //   setText("")
  //   textAreaRef.current.disabled = false
  //   textAreaRef.current.focus()
  // }


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
