"use client";

import { X, Menu } from "lucide-react";
import React, { useState } from 'react';
import Image from 'next/image';
import NavLink from '../atoms/navLink';
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black w-full font-medium text-sm flex justify-center transition-colors border-b">
      {/* Border Wrapper */}
      <div className="flex flex-col w-[90%] p-4">
        <div className="flex items-center  w-full">
          <div className='h-10 w-36'>
            <Image src="/svgs/logo.svg" className='!relative' alt='logo' fill />
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden ml-auto md:flex space-x-6 items-center justify-center px-2">
            <NavLink href='/catalogue'>Catalogue</NavLink>
            <NavLink href='/about'> About</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
            <div className="hidden md:flex text-black space-x-4">
                <Link href="/signin">
                  <button className='border border-[#E4E4E7] px-3 py-2 rounded-sm hover:opacity-80'>
                    Log In
                  </button>
                </Link>
                <Link href="/signup">
                  <button className='bg-black text-white px-3 py-2 rounded-sm hover:opacity-80'>
                    Sign Up
                  </button>
                </Link>
          </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 ml-auto" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
          {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <NavLink href='/'>Properties</NavLink>
            <NavLink href='/about'> About</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
            <div className="text-black space-y-4 flex flex-col">
                <Link href="/signin">
                  <button className='border border-[#E4E4E7] px-3 py-2 rounded-sm hover:opacity-80'>
                    Log In
                  </button>
                </Link>
                <Link href="/signup">
                  <button className='bg-black text-white px-3 py-2 rounded-sm hover:opacity-80'>
                    Sign Up
                  </button>
                </Link>
          </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
