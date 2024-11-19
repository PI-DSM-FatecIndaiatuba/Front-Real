import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='bg-white text-black font-gudea py-3.5 pr-4 flex items-center content-center justify-between box-border'>
      <h1 className='text-2xl md:text-4xl lg:text-6xl ml-6 mr-5'>Dengue</h1>
      <div className='flex items-center gap-11'>
        <nav className='text-sm md:text-lg lg:text-2xl flex gap-9 items-center'>
          <a className='hover:underline hover:decoration-solid hover:decoration-black' href="#">Home</a>
          <a className='hover:underline hover:decoration-solid hover:decoration-black' href="#">Contato</a>
          <button className='p-1.5 md:p-2 lg:p-3 bg-sky-700 hover:bg-sky-900 text-white rounded-lg duration-150 hover:duration-150'>Cadastre-se</button>
        </nav>
          <img className='w-12 md:w-28 lg:w-32' src="./imgs/Indaiatuba_brasao.png" alt="" />
      </div>
    </div>
  )
}

export default Header
