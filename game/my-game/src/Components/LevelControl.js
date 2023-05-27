import React, { useEffect, useState } from "react"

function LevelControl(changeGameSettings, score) {
  const [level, setLevel] = useState(1)

  useEffect(() => {
    if (Math.ceil(score % 10) == level) return
    setLevel(Math.ceil(score % 10))
  }, [score])

  useEffect(() => {
    switch (level) {
      case 1:
        changeGameSettings(2000, 100)
        break

      case 2:
        changeGameSettings(1500, 100)

      case 3:
        changeGameSettings(3000, 70)
    }
  }, [level])

  return <div></div>
}

export default LevelControl
