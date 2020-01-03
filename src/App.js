import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const calculateWordCount = (text) => { // The text in the argument will not mutate the text in state as it's been passed down
    console.log(text === "" ? 0 : text.trim().split(" ").length)
    return text.trim().split(" ").length
  }

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <textarea onChange={handleChange} />
      <h4>Time Remaining</h4>
      <button onClick={() => calculateWordCount(text)}>Start Game</button>
      <h1>Word Count: </h1>
    </div>
  );
}

export default App;
