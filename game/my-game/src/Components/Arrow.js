import { useState, useEffect } from "react"

import {
  BiDownArrow,
  BiLeftArrow,
  BiRightArrow,
  BiUpArrow,
} from "react-icons/bi"

function Arrow({
  id,
  direction,
  deleteArrow,
  checkArrowHit,
  shieldDirection,
  arrowSpeed,
  gamePaused,
}) {
  const [top, setTop] = useState(
    direction == "down" ? 680 : direction == "up" ? 0 : 342
  )
  const [left, setLeft] = useState(
    direction == "right" ? 680 : direction == "left" ? 0 : 342
  )

  // Check position of each individual arrow
  useEffect(() => {
    if (gamePaused) return
    let interval
    switch (direction) {
      case "down":
        if (top <= 360) {
          checkArrowHit(direction, shieldDirection)
          deleteArrow(id)
          break
        }
        interval = setInterval(() => {
          setTop((_top) => parseInt(top) - 10)
        }, arrowSpeed)
        break
      case "up":
        if (top >= 340) {
          checkArrowHit(direction, shieldDirection)
          deleteArrow(id)
          break
        }
        interval = setInterval(() => {
          setTop((_top) => parseInt(_top) + 10)
        }, arrowSpeed)
        break
      case "right":
        if (left <= 360) {
          checkArrowHit(direction, shieldDirection)
          deleteArrow(id)
          break
        }
        interval = setInterval(() => {
          setLeft((_top) => parseInt(_top) - 10)
        }, arrowSpeed)
        break
      case "left":
        if (left >= 340) {
          checkArrowHit(direction, shieldDirection)
          deleteArrow(id)
          break
        }
        interval = setInterval(() => {
          setLeft((_top) => parseInt(_top) + 10)
        }, arrowSpeed)
        break
    }

    return () => clearInterval(interval)
  }, [top, left, gamePaused])

  return (
    <div
      id={id}
      className={`text-white absolute transition-all w-3 h-3 ease-linear`}
      style={{ top: top, left: left }}
    >
      {direction == "down" ? (
        <BiUpArrow />
      ) : direction == "up" ? (
        <BiDownArrow />
      ) : direction == "right" ? (
        <BiLeftArrow />
      ) : (
        <BiRightArrow />
      )}
    </div>
  )
}

export default Arrow
