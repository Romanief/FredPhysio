import React from "react"
import Contact from "./Contact"

import NavBar from "./NavBar"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
      <Contact />
    </div>
  )
}

export default Layout
