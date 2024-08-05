import React from 'react'

const Footer = () => {
  return (
    <div className="bg-blue-500 text-slate-950 text-center text-xl p-4">
        <div className="lg:flex xl:flex 2xl:flex justify-around text-center mx-auto">
          <div className="w-48 text-start sm:mx-auto md:mx-auto">
            <h1 className="text-3xl">TeslaLab</h1>
            <p>TeslaLab is a software as a service based software company in Bangladesh. We are providing different kind of software services and consultent.</p>
          </div>
          <div className="w-48 text-start sm:mx-auto md:mx-auto">
            <h1 className="text-3xl">Our Services</h1>
            <h2>Web Development</h2>
            <h2>DevOps</h2>
            <h2>Cloud Computing</h2>
            <h2>App Development</h2>
            <h2>Game Development</h2>
            <h1>Digital Marketing</h1>
          </div>
          <div className=" w-48 text-start sm:mx-auto md:mx-auto">
            <h1 className="text-3xl">Contact</h1>
            <h2>X</h2>
            <h2>Telegram</h2>
            <h2>Github</h2>
            <h2>Linkedin</h2>
          
          </div>
        </div>
        <div className="pt-4 pb-4">
          <h1>TeslaLab &copy; 2024 All Right Reverserd.</h1>
        </div>
    </div>
  )
}

export default Footer