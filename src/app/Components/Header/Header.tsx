"use client";
import React from 'react'
import { navItems } from "../../constants"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from 'next/image';
import myImage from '../../assets/Indaiatuba_brasao.png';
import Link from 'next/dist/client/link';


export const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="scroll-smooth sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 space-x-4">
            <Image src={myImage.src} alt="description" width={50} height={50} />
            <span className="text-xl tracking-tight"> Dengue</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="/Grafico" className="py-2 px-3 border rounded-md">
              Casos de Dengue
            </a>
            <Link className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md" href='/Cadastro'>
              Cadastro de Interesse
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="/Grafico" className="py-2 px-3 border rounded-md">
                Casos de Dengue
              </a>
              <a
                href="/Cadastro"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800"
              >
                Cadastro de Interesse
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
