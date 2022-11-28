'use client'
import logo from '../../public/logo.png'
import Image from "next/image"
import { MagnifyingGlass, List, X } from 'phosphor-react'
import { Text } from '../../components/text/text'
import { useState } from 'react'

export default function Header() {
  const [menu, setMenu] = useState(false)
  return (
    <div className='flex justify-between w-full h-24 shadow-2xl bg-just-black'>
      <div className='z-50 w-full flex justify-between'>
        <Image width={100} height={100} src={logo} alt='logo' />
        <div onClick={() => setMenu(!menu)} className='p-8 opacity-0 max-md:opacity-100'>
          {menu ? <X color='white' size={30} /> : <List color='white' size={30} />}
        </div>
      </div>

      <div className={`flex items-center justify-between w-full max-md:flex-col max-md:h-full max-md:z-auto max-md:absolute max-md:top-0 max-md:bg-just-black ${menu ? 'max-md:opacity-100' : 'max-md:opacity-0'} `}>
        <main className='flex ml-40 max-md:absolute max-md:ml-0 max-md:top-1/2'>
          <ul className='flex items-center  max-md:flex-col text-just-white font-bold text-xl'>
            <li className='ml-6 mr-6 hover:text-dark-red max-md:m-4'><h1>teste</h1> </li>
            <li className='ml-6 mr-6 hover:text-dark-red max-md:m-4'><h1>teste</h1> </li>
          </ul>
        </main>

        <div className='flex justify-between cursor-pointer mr-5 max-md:absolute max-md:top-[70%] max-md:mr-0'>
          <input className='bg-just-white border border-just-black text-black h-8 mr-2 rounded-md' placeholder='Ex: Supra' disabled />
          <div className='flex items-center justify-center bg-just-white border border-just-black w-12 h-8 rounded-md'>
            <MagnifyingGlass size={20} />
          </div>
        </div>

      </div>

    </div>
  )
}