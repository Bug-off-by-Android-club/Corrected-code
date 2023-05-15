import React from 'react'
import Image from 'next/image'
// import {Link} from "react-router-dom"
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header>
        {/* Top nav */}
        <div className="flex items-center bg-black p-1 flex-grow py-2 w-full">
            
            {/* Search */} 
            <div className="flex h-10 mt-2 px-5  cursor-pointer w-[80%]">
                <h1 className='text-white h-10 font-semibold text-xl px-3 pr-18'>Bugoff by Android Club</h1>
                <input className="p-3 h-full w-full rounded-l-md focus:outline-none px-2 " type="text" placeholder="Search Item"/>
                <SearchIcon className="h-10 p-3 bg-pink-400 hover:bg-green-500 rounded-r-md"/>
                
            </div>
            {/* Right */}
            <div className="text-white mt-2 flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ml-auto">
                <div className="link">
                <button className="bg-blue-500 h-10 w-20 text-white py-2 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600">
                <p className="font-extrabold md:text-sm">Sign Up</p>
                </button>
                
                
                    
                </div>
                
                <div className="relative link flex items-center">
                    <span className=" md:right-7 h-4 w-4 bg-yellow-100 text-center rounded-full text-black font-bold">0</span>
                    <ShoppingCartIcon className="h-7"/>
                    <p className="hidden md:inline  md:text-sm mt-2">Cart</p>
                </div>
                
            </div>

        </div>

        {/* Bottom nav */}
        <div>
            <div className="flex items-center justify-evenly flex-wrap space-x-3 p-4 pl-6 bg-black text-white text-sm">
                
                
                <p className="link">Business</p>
                
                <p className="link">Electronics</p>
                <p className="link">Food & Grocery</p>

            </div>
        </div>
      
    </header>
  )
}

export default Header
