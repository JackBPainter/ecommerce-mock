import { useState, useEffect, useRef } from "react";

const useTypingGame = (startingTime) => {
    const textAreaRef = useRef();

    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(startingTime);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    const startGame = () => {
        setIsTimeRunning(true)
        setTimeRemaining(startingTime)
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

      return [handleChange, text, isTimeRunning, startGame, wordCount, timeRemaining, textAreaRef]
}

export default useTypingGame