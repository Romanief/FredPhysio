import React from "react"

function PictureBG() {
  return (
    <div
      className="relative w-[80%] aspect-video bg-myself md:bg-80ss bg-90ss lg:bg-70ss mr-40 bg-no-repeat"
      style={{
        backgroundSize: "70%",
        backgroundPositionX: "-20%",
      }}
    >
      <div
        className="absolute top-0 -left-20 w-full bottom-0"
        style={{
          background: "linear-gradient(140deg, transparent 40%,  #fff 30%)",
        }}
      ></div>
    </div>
  )
}

export default PictureBG

/* <div className=" absolute translate-x-48 -rotate-60">
        <div className="w-[1000px] h-10 bg-black"></div>
        <div className="w-[1000px] h-[1000px]  bg-main"></div>
      </div> */
