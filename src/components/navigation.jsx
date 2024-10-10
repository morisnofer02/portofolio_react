import React from "react"
import { Link } from "react-scroll"
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi"

export default function Navigation() {
  return (
    <div
      id="navigation"
      className="fixed bottom-0 left-0 right-0 text-center z-10 lg:translate-y-[-25%] lg:top-[50%] lg:left-auto lg:right-5"
    >
      <div className="flex items-center justify-between mx-auto bg-white text-secondary p-2 rounded-full border-secondary border-[1px] border-solid max-w-[200px] lg:flex-col">
        <Link
          to="home"
          activeClass="active"
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiHomeAlt />
        </Link>
        <Link
          to="profile"
          activeClass="active"
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          // Offset ini digunakan apa bila headernya fixed maka dia akan memberikan ruang untuk headernya
          // offset={-100}
          smooth={true}
          spy={true}
        >
          <BiUser />
        </Link>
        <Link
          to="portfolio"
          activeClass="active"
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          // offset={-100}
          smooth={true}
          spy={true}
        >
          <BiCodeAlt />
        </Link>
      </div>
    </div>
  )
}
