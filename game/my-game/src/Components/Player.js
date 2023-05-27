function Player({ setShieldDirection, isPlaying, gamePaused }) {
  // Change shield direction on keyUp
  document.addEventListener("keyup", (e) => {
    if (!isPlaying || gamePaused) return // If game is not started don't change any state
    const player = document.querySelector("#player")

    switch (e.key) {
      case "ArrowUp":
        player.style = "border-width: 2px 0 0 0;"
        setShieldDirection("up")
        break
      case "ArrowLeft":
        player.style = "border-width: 0 0 0 2px;"
        setShieldDirection("left")
        break
      case "ArrowRight":
        player.style = "border-width: 0 2px 0 0;"
        setShieldDirection("right")
        break
      case "ArrowDown":
        player.style = "border-width: 0 0 2px 0;"
        setShieldDirection("down")
        break
    }
  })

  return (
    <div
      id="player"
      className="relative top-[330px] left-[330px] h-10 w-10 border-white border-b-2 box-border flex flex-col justify-around transition-all"
    >
      <div className="h-3 w-3 bg-red-500 mx-auto"></div>
    </div>
  )
}

export default Player
