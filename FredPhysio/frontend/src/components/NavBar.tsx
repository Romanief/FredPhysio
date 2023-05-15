import React from "react"

import NavBarItem from "./NavBarItem"

// Fixed Navbar with links to other page of the site
function NavBar() {
  return (
    <>
      {/* On Laptops: */}
      <div className="hidden sm:fixed sm:flex sm:justify-between w-screen h-20 border-b-black border-b pt-4 px-5">
        <div className="text-5xl ">Logo</div>
        {/* TODO: Create components for NavBarItem */}
        <NavBarItem name="About" link="About" />
        <NavBarItem name="Services" link="Services" />
        <NavBarItem name="Contact Me" link="Contacts" />
      </div>

      {/* On phones and thin devices */}
      <div className="sm:hidden fixed flex justify-center w-screen h-20 border-b-black border text-center pt-4">
        <div className="text-5xl mr-3">Logo</div>
        {/* TODO: DropDown menu with link options */}
        <div>Menu</div>
      </div>

      {/* Empty div to prevent elements to collapse onto fixed Navbar */}
      <div className="h-20"></div>
    </>
  )
}

export default NavBar
