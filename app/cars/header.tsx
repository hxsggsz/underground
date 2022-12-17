'use client'
import Link from 'next/link'
import Image from "next/image"
import ShopCart from './shop-cart'
import { motion } from 'framer-motion'
import logo from '../../public/logo.png'
import { useContext, useState } from 'react'
import { CardContext } from '../../context/cardContext'
import { SearchContext, } from '../../context/searchContext'
import { MagnifyingGlass, List, X, ShoppingCart } from 'phosphor-react'

export default function Header() {
  const [menu, setMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const { carrinho } = useContext(CardContext)
  const { search, setSearch } = useContext(SearchContext)

  return (
    <div className={`flex items-center fixed w-full h-24 z-50 shadow-2xl bg-just-black max-md:z-30 `}>

      <div className='z-50 w-[100%] flex items-center mx-2 justify-between'>
        <div onClick={() => setMenu(false)}>
          <Link data-testid='link' href='/cars'>
            <Image width={100} height={100} src={logo} alt='logo' />
          </Link>
        </div>

        {/* por algum motivo nessa versão do next, setMenu(!menu) não está funcionando direito, algumas vezes ele troca o valor, outras não. */}
        <motion.div whileTap={{ rotate: 360, }} onClick={() => setMenu(menu ? false : true)} className='opacity-0 cursor-pointer max-md:opacity-100'>
          {menu ? <X color='white' size={30} /> : <List color='white' size={30} />}
        </motion.div>

      </div>

      <div className={`flex justify-between transition-all duration-500 ease-in max-md:flex-col max-md:bg-just-black max-md:w-full max-md:h-full max-md:fixed max-md:justify-center max-md:items-center ${menu ? 'max-md:top-0' : 'max-md:top-[-400%]'}`}>

        <ul className='flex items-center gap-x-10 mr-4 text-just-white font-bold text-lg max-md:py-80 max-md:flex-col'>

          <li onClick={() => setMenu(false)}>

            <div className='w-6 h-6 text-center rounded-full bg-light-red absolute ml-4 mt-4 top-0 max-md:opacity-0'>
              {carrinho.length}
            </div>

            <ShoppingCart onClick={() => setShowCart(!showCart)} className='cursor-pointer hover:text-dark-red  max-md:hidden' size={30} />

            {/* versão mobile */}
            <Link href='/cars/shop-page'>
              <ShoppingCart className=' hover:text-dark-red hidden max-md:mr-10 max-md:flex' size={30} />
            </Link>

            {showCart && (
              <>
                <motion.div animate={{ y: [-100, 0] }} className='max-md:hidden'>
                  <ShopCart />
                </motion.div>
              </>
            )}
          </li>

          <motion.li onClick={() => setMenu(false)} whileTap={{ x: [0, 100, -100, 0] }} transition={{ type: 'keyframes' }} className='cursor-pointer font-2xl mr-[2.5rem] hover:text-dark-red'>

            <Link href='/cars/contact'>Contato</Link>

          </motion.li>

          <motion.li onClick={() => setMenu(false)} whileTap={{ x: [0, 100, -100, 0] }} transition={{ type: 'keyframes' }} className='font-2xl hover:text-dark-red w-36 max-md:border-dark-red'>
            <Link href='/cars/about'>Quem somos</Link>
          </motion.li>


          <form onSubmit={(e) => {
            e.preventDefault()
            setMenu(false)
          }}
            className='flex justify-between items-center gap-x-2'>

            <input className='bg-just-white  border border-just-black text-black h-8 rounded-md focus-within:ring-2 ring-dark-red outline-none' value={search} onChange={event => setSearch(event.currentTarget.value)} placeholder='Ex: nissan' />

            <button type='submit' className='flex items-center justify-center bg-just-white border border-just-black w-12 h-8 rounded-md'>
              <MagnifyingGlass className='text-just-black' size={20} />
            </button>

          </form>

        </ul>

      </div>

    </div >
  )
}