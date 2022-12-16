'use client'
import Link from 'next/link'
import Image from "next/image"
import { motion } from 'framer-motion'
import logo from '../../public/logo.png'
import { useContext, useState } from 'react'
import { MagnifyingGlass, List, X, ShoppingCart } from 'phosphor-react'
import { SearchContext, } from '../../context/searchContext'
import { CardContext } from '../../context/cardContext'
import ShopCart from './shop-cart'

interface ItemsProps {
  name: string
  price: String
  url: string
}

export default function Header() {
  const [menu, setMenu] = useState(false)
  const [contato, setContato] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const { search, setSearch } = useContext(SearchContext)
  const { carrinho } = useContext(CardContext)

  return (
    <div className='flex justify-between fixed w-full h-24 z-50 shadow-2xl bg-just-black'>

      <div className='z-50 w-full flex justify-between'>

        <Link data-testid='link' href='/cars'>
          <Image width={100} height={100} src={logo} alt='logo' />
        </Link>
        {/* por algum motivo nessa versão do next, setMenu(!menu) não está funcionando direito, algumas vezes ele troca o valor, outras não. */}
        <motion.div whileTap={{ rotate: 360, }} transition={{ type: 'tween' }} onClick={() => setMenu(menu ? false : true)} className='p-8 opacity-0 cursor-pointer max-md:opacity-100'>
          {menu ? <X color='white' size={30} /> : <List color='white' size={30} />}
        </motion.div>

      </div>

      <div className={`flex items-center relative justify-between w-full max-md:flex-col max-md:h-full max-md:z-30 max-md:absolute max-md:top-0 max-md:bg-just-black transition-all duration-500 ease-in ${menu ? 'top-[100%]' : 'max-md:top-[-100%]'} `}>
        <main className='flex ml-40 max-md:absolute max-md:ml-0 max-md:bottom-1/2'>

          <ul className='flex items-center gap-x-20 mr-4 max-md:flex-col text-just-white font-bold text-lg'>

            <li>

              <div className='p-2'>
                <div className='w-6 h-6 text-center rounded-full bg-light-red fixed ml-4 mt-4 top-0'>
                  {carrinho.length}
                </div>

                <ShoppingCart onClick={() => setShowCart(!showCart)} className='cursor-pointer hover:text-dark-red' size={30} />
              </div>

              {showCart && (
                <div>
                  <ShopCart />
                </div>
              )}
            </li>

            <motion.li whileTap={{ x: [0, 100, -100, 0] }} transition={{ type: 'keyframes' }} className='font-2xl hover:text-dark-red w-36 max-md:border-dark-red max-md:mr-6 max-md:m-4 '>
              <Link href='/cars/about'>Quem somos</Link>
            </motion.li>

            <motion.li whileTap={{ x: [0, 100, -100, 0] }} transition={{ type: 'keyframes' }} onClick={() => setContato(!contato)} className='cursor-pointer font-2xl mr-[5rem] hover:text-dark-red max-md:border-dark-red max-md:ml-0 max-md:m-4'>
              <h1>Contato</h1>

              {contato && (
                <motion.div animate={{ x: [0, -50, 50, 0] }} transition={{ type: 'keyframes' }} className=' absolute bottom-[-50%] left-[45%] mt-20 rounded-md text-center border-2 border-just-black text-dark-red bg-light-red max-w-[180px] shadow-2xl'>
                  <div>
                    VOCÊ NÃO ENTRA EM CONTATO, NÓS ENTRAMOS
                  </div>
                </motion.div>
              )}
            </motion.li>

          </ul>


          <form onSubmit={(e) => e.preventDefault()} className='flex justify-between items-center mr-5 max-md:absolute max-md:bottom-[95%] max-md:mr-0'>

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