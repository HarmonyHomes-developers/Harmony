"use client";

import { X, Menu } from "lucide-react";
import React, { useState } from 'react';
import Image from 'next/image';
import NavLink from '../atoms/navLink';
import Link from "next/link";
import { ThemeToggle } from '../utils/ThemeProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background text-foreground w-full font-medium text-sm flex justify-center transition-colors border-b border-border">
      {/* Border Wrapper */}
      <div className="flex flex-col w-[90%] p-4">
        <div className="flex items-center w-full">
          <div className='h-10 w-36'>
            <Link href="/">
              <Image src="/svgs/logo.svg" alt="logo" fill className="!relative" />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden ml-auto md:flex space-x-6 items-center justify-center px-2">
            <NavLink href='/catalogue'>Catalogue</NavLink>
            <NavLink href='/about'>About</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
            <div className="hidden md:flex space-x-4 items-center">
                <Link href="/signin">
                  <button className='border border-border px-3 py-2 rounded-sm hover:bg-secondary'>
                    Log In
                  </button>
                </Link>
                <Link href="/signup">
                  <button className='bg-primary text-white px-3 py-2 rounded-sm hover:bg-primary-hover'>
                    Sign Up
                  </button>
                </Link>
                <ThemeToggle />
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
            <NavLink href='/catalogue'>Catalogue</NavLink>
            <NavLink href='/about'>About</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
            <div className="space-y-4 flex flex-col">
                <Link href="/signin">
                  <button className='border border-border px-3 py-2 rounded-sm hover:bg-secondary'>
                    Log In
                  </button>
                </Link>
                <Link href="/signup">
                  <button className='bg-primary text-white px-3 py-2 rounded-sm hover:bg-primary-hover'>
                    Sign Up
                  </button>
                </Link>
                <div className="flex items-center">
                  <ThemeToggle />
                  <span className="ml-2">Toggle theme</span>
                </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
