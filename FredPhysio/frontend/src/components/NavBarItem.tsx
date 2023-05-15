import Link from "next/link"
import React from "react"

function NavBarItem({ name, link }: { name: string; link: string }) {
  return (
    <Link
      className="pt-3 transition-all hover:border-b-2 hover:border-black h-min"
      href={link}
    >
      {name}
    </Link>
  )
}

export default NavBarItem
