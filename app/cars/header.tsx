'use client'
import logo from '../../public/logo.png'
import Image from "next/image"
import { MagnifyingGlass, List, X } from 'phosphor-react'
import { Text } from '../../components/text/text'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  const [menu, setMenu] = useState(false)
  const [contato, setContato] = useState(false)
  return (
    <div className='flex justify-between w-full h-24 shadow-2xl bg-just-black'>

      <div className='z-50 w-full flex justify-between'>

        <Link data-testid='link' href='/cars'>
          <Image width={100} height={100} src={logo} alt='logo' />
        </Link>

        <motion.div whileTap={{ rotate: 360, }} transition={{ type: 'tween' }} onClick={() => setMenu(!menu)} className='p-8 opacity-0 cursor-pointer max-md:opacity-100'>
          {menu ? <X color='white' size={30} /> : <List color='white' size={30} />}
        </motion.div>

      </div>

      <div className={`flex items-center justify-between w-full max-md:flex-col max-md:h-full max-md:z-auto max-md:absolute max-md:top-0 max-md:bg-just-black transition-all duration-500 ease-in ${menu ? 'top-20' : 'max-md:top-[-100%]'} `}>
        <main className='flex ml-40 max-md:absolute max-md:ml-0 max-md:bottom-1/2'>

          <ul className='flex items-center relative font-xl max-md:flex-col text-just-white font-bold text-lg'>

            <motion.li whileTap={{ x: [0, 100, -100, 0] }} transition={{ type: 'keyframes' }} className='ml-6 mr-20 w-32 hover:text-dark-red max-md:border-dark-red max-md:mr-6 max-md:m-4 '>
              <Link href='/cars/about'>Quem somos</Link>
            </motion.li>

            <motion.li whileTap={{ x: [0, 100, -100, 0] }} transition={{ type: 'keyframes' }} onClick={() => setContato(!contato)} className='ml-6 mr-12 cursor-pointer hover:text-dark-red max-md:border-dark-red max-md:ml-0 max-md:m-4'>
              <h1>Contato</h1>
            </motion.li>

            {contato && (
              <motion.div animate={{ x: [0, -50, 50, 0] }} transition={{ type: 'keyframes' }} className='absolute top-[140%] max-md:top-[85%] right-0 p-4 rounded-md text-center border-2 border-just-black text-dark-red bg-light-red max-w-[180px] shadow-2xl'>VOCÊ NÃO ENTRA EM CONTATO, NÓS ENTRAMOS</motion.div>
            )}

          </ul>

        </main>

        <div className='flex justify-between cursor-pointer mr-5 max-md:absolute max-md:bottom-[85%] max-md:mr-0'>

          <input className='bg-just-white border border-just-black text-black h-8 mr-2 rounded-md' placeholder='Ex: Supra' disabled />

          <div className='flex items-center justify-center bg-just-white border border-just-black w-12 h-8 rounded-md'>
            <MagnifyingGlass size={20} />
          </div>

        </div>

      </div>

    </div>
  )
}