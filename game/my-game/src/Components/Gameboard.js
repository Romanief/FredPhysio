import Player from "./Player"
import Arrow from "./Arrow"

function Gameboard({
  score,
  setScore,
  shieldDirection,
  setShieldDirection,
  arrowObject,
  setArrowObject,
  counter,
  setCounter,
  createArrow,
  deleteArrow,
  checkArrowHit,
  isPlaying,
  switchGameStatus,
  resetGame,
  arrowSpeed,
  gamePaused,
  setGamePaused,
}) {
  return (
    // Game Board
    <div
      className={`
      w-[700px] 
      h-[700px] 
      relative
      border-gray-500 
      border-2`}
    >
      {isPlaying ? (
        <div className="relative">
          {gamePaused ? (
            <div className="absolute top-40 left-80 bg-black border-white border-2 text-white">
              PAUSE
            </div>
          ) : undefined}

          {/* Player Object */}
          <Player
            setShieldDirection={setShieldDirection}
            isPlaying={isPlaying}
            gamePaused={gamePaused}
          />
          {/* Arrow Objects */}
          {Object.keys(arrowObject).map((x) => (
            <Arrow
              shieldDirection={shieldDirection}
              key={arrowObject[x.toString()].id}
              id={arrowObject[x.toString()].id}
              direction={arrowObject[x.toString()].direction}
              deleteArrow={deleteArrow}
              checkArrowHit={checkArrowHit}
              arrowSpeed={arrowSpeed}
              gamePaused={gamePaused}
            />
          ))}
        </div>
      ) : (
        // Start Button
        <div
          className="text-center mt-20"
          onClick={() => {
            resetGame()
            switchGameStatus()
          }}
        >
          Start
        </div>
      )}
    </div>
  )
}

export default Gameboard
