'use client'
import Link from 'next/link'
import Image from "next/image"
import { motion } from 'framer-motion'
import logo from '../../public/logo.png'
import { useContext, useState } from 'react'
import { MagnifyingGlass, List, X } from 'phosphor-react'
import { SearchContext, } from '../../context/searchContext'

export default function Header() {
  const [menu, setMenu] = useState(false)
  const [contato, setContato] = useState(false)
  const { search, setSearch } = useContext(SearchContext)

  return (
    <div className='flex justify-between w-full h-24 shadow-2xl bg-just-black'>

      <div className='z-50 w-full flex justify-between'>

        <Link data-testid='link' href='/cars'>
          <Image width={100} height={100} src={logo} alt='logo' />
        </Link>
        {/* por algum motivo nessa versão do next, setMenu(!menu) não está funcionando direito, algumas vezes ele troca o valor, outras não. */}
        <motion.div whileTap={{ rotate: 360, }} transition={{ type: 'tween' }} onClick={() => setMenu(menu ? false : true)} className='p-8 opacity-0 cursor-pointer max-md:opacity-100'>
          {menu ? <X color='white' size={30} /> : <List color='white' size={30} />}
        </motion.div>

      </div>

      <div className={`flex items-center relative justify-between w-full max-md:flex-col max-md:h-full max-md:z-30 max-md:absolute max-md:top-0 max-md:bg-just-black transition-all duration-500 ease-in ${menu ? 'top-20' : 'max-md:top-[-100%]'} `}>
        <main className='flex ml-40 max-md:absolute max-md:ml-0 max-md:bottom-1/2'>

          <ul className='flex items-center  max-md:flex-col text-just-white font-bold text-lg'>

            <motion.li whileTap={{ x: [0, 100, -100, 0] }} transition={{ type: 'keyframes' }} className='ml-6 mr-24 w-32 font-2xl hover:text-dark-red max-md:border-dark-red max-md:mr-6 max-md:m-4 '>
              <Link href='/cars/about'>Quem somos</Link>
            </motion.li>

            <motion.li whileTap={{ x: [0, 100, -100, 0] }} transition={{ type: 'keyframes' }} onClick={() => setContato(!contato)} className='ml-6 mr-12 cursor-pointer font-2xl hover:text-dark-red max-md:border-dark-red max-md:ml-0 max-md:m-4'>
              <h1>Contato</h1>
            </motion.li>

            {contato && (
              <motion.div animate={{ x: [0, -50, 50, 0] }} transition={{ type: 'keyframes' }} className='absolute top-[140%] max-md:top-[85%] right-[30%] p-4 rounded-md text-center border-2 border-just-black text-dark-red bg-light-red max-w-[180px] shadow-2xl'>VOCÊ NÃO ENTRA EM CONTATO, NÓS ENTRAMOS</motion.div>
            )}

          </ul>


          <form onSubmit={(e) => e.preventDefault()} className='flex justify-between mr-5 max-md:absolute max-md:bottom-[95%] max-md:mr-0'>

            <input className='bg-just-white  border border-just-black text-black h-8 mr-2 rounded-md focus-within:ring-2 ring-dark-red outline-none' value={search} onChange={event => setSearch(event.currentTarget.value)} placeholder='Ex: nissan' />

            <button type='submit' className='flex items-center justify-center bg-just-white border border-just-black w-12 h-8 rounded-md'>
              <MagnifyingGlass size={20} />
            </button>

          </form>

        </main>
      </div>

    </div>
  )
}