import { useState, useCallback, useEffect } from "react"
import Gameboard from "./Components/Gameboard"
import LevelControl from "./Components/LevelControl"

export default function App() {
  // Game States
  const [isPlaying, setIsPlaying] = useState(false)
  const [gamePaused, setGamePaused] = useState(false)
  const [score, setScore] = useState(0)
  const [health, setHealth] = useState(19)
  const [shieldDirection, setShieldDirection] = useState("down")

  // Arrow States
  const [counter, setCounter] = useState(0)
  const [arrowObject, setArrowObject] = useState({})
  const [arrowGenerationSpeed, setArrowGenerationSpeed] = useState(2000)
  const [arrowSpeed, setArrowSpeed] = useState(100)

  // Game Status Functions
  const switchGameStatus = () => {
    setIsPlaying((_isPlaying) => (_isPlaying ? false : true))
  }

  const resetGame = () => {
    setHealth(19)
    setScore(0)
    setArrowObject({})
    setIsPlaying(false)
  }

  const changeGameSettings = (newArrowGenerationSpeed, newArrowSpeed) => {
    setArrowGenerationSpeed(newArrowGenerationSpeed)
    setArrowSpeed(newArrowSpeed)
  }

  useEffect(() => {
    if (!isPlaying || gamePaused) return
    let interval = setInterval(createArrow, arrowGenerationSpeed)
    return () => clearInterval(interval)
  }, [counter, isPlaying, gamePaused])

  document.addEventListener("keyup", (e) => {
    if (e.key == " ") {
      setGamePaused((_gamePaused) => !_gamePaused)
    }
  })

  // Arrow related Functions
  const createArrow = useCallback(() => {
    const x = Math.floor(Math.random() * 4)
    const direction = (x) => {
      switch (x) {
        case 0:
          return "up"
        case 1:
          return "down"
        case 2:
          return "left"
        case 3:
          return "right"
        default:
          return
      }
    }
    setArrowObject((ao) => ({
      ...ao,
      [counter]: { id: counter, direction: direction(x) },
    }))
    setCounter(counter + 1)
  }, [counter])

  const deleteArrow = useCallback(
    (arrowId) => {
      let copy = { ...arrowObject }
      delete copy[arrowId]
      setArrowObject(copy)
    },
    [arrowObject]
  )

  const checkArrowHit = (arrowDirection, shieldDirection) => {
    if (arrowDirection == shieldDirection) {
      setScore((_score) => _score + 1)
      console.log(score)
    } else {
      console.log(arrowDirection, shieldDirection)
      setHealth((_health) => _health - 1)
      console.log(health)
    }
    if (health < 1) switchGameStatus()
  }

  return (
    <div className="w-screen h-screen bg-black text-white flex justify-around">
      <div className="w-20">Score: {score}</div>
      <Gameboard
        shieldDirection={shieldDirection}
        setShieldDirection={setShieldDirection}
        score={score}
        setScore={setScore}
        counter={counter}
        setCounter={setCounter}
        arrowObject={arrowObject}
        setArrowObject={setArrowObject}
        createArrow={createArrow}
        deleteArrow={deleteArrow}
        checkArrowHit={checkArrowHit}
        isPlaying={isPlaying}
        switchGameStatus={switchGameStatus}
        resetGame={resetGame}
        arrowSpeed={arrowSpeed}
        gamePaused={gamePaused}
        setGamePaused={setGamePaused}
      />
      <div className="w-20">Health: {health + 1}</div>

      {/* <LevelControl score={score} changeGameSettings={changeGameSettings} /> */}
    </div>
  )
}
