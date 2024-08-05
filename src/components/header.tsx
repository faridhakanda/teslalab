'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const imageOpen = () => {
    setIsOpen(!isOpen)
  }
  const headerOpen = () => {
    setIsOpen(false)
  }
  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/'
    },
    {
      id: 2,
      title: 'Blog',
      url: '/blog'
    },
    {
      id: 3,
      title: 'Tutorial',
      url: '/tutorial'
    },
    {
      id: 4,
      title: 'About Us',
      url: '/aboutus'
    }
  ];
  return (
    <div className="bg-slate-100 text-slate-950 shadow-xl h-12 p-2">
      {/* Desktop Header with Responsive  */}
        <div className="flex justify-around text-2xl sm:hidden md:hidden lg:visible xl:visible 2xl:visible">
           <div>
            <Link href="/">TeslaLab</Link>
           </div>
           <div className="flex justify-around gap-4">
            {links.map(linkers => {
              return (
                <div key={linkers.id}>
                  <Link href={linkers.url}>{linkers.title}</Link>
                </div>
              )
            })}
           </div>
        </div>
        {/* Mobile Header with Responsive */}
        <div className="flex justify-between text-2xl mx-4  sm:visible md:visible lg:hidden xl:hidden 2xl:hidden">
            <div>
              <Link onClick={headerOpen}  href="/">TeslaLab</Link>
            </div>
            <div onClick={imageOpen} className="">
              {!isOpen ? <Image src="/hamburger.png" alt="menu" width="32" height="32" /> : <Image src="/cross.png" alt="cross" width="32" height="32" />}  
            </div>   
        </div>
        <div className="text-2xl">
          {isOpen && 
            <div className={`bg-slate-100 shadow-md rounded-md mt-3 w-52 h-48 p-4 float-right ${isOpen ? "opacity: 100": "opacity: 0"}`}>
              {links.map(linkers => {
                return (
                  <div key={linkers.id}>
                    <Link onClick={imageOpen} href={linkers.url}>{linkers.title}</Link>
                  </div>
                )
              })}
            </div>
          }
        </div>
    </div>
  )
}

export default Header