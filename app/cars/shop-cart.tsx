import { useContext, useState } from "react"
import { CardContext } from "../../context/cardContext"
import Image from 'next/image'
import { Modal } from '../../components/modal/modal'
import { Text } from '../../components/text/text'
import { AnimatePresence } from "framer-motion"
import { X } from "phosphor-react"
import { Notify } from "./notification"
import { useRouter } from "next/navigation"
import { sleep } from "../../lib/sleep"
import SpinLoading from "../../components/spin-loading/spin-loading"

export default function ShopCart() {
  const router = useRouter()
  const [sure, setSure] = useState(false)
  const [notify, setNotify] = useState(false)
  const [loading, setLoading] = useState(false)
  const { carrinho } = useContext(CardContext)

  return (
    <div className='absolute top-[100%] max-md:top-[10%] max-md:w-full max-md:h-full max-md:bg-just-black'>
      <ul className='w-80 h-80 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-corner-just-black scrollbar-track-just-black scrollbar-thumb-just-white max-md:overflow-y-hidden  p-5  pr-10 bg-just-black max-md:bg-dark-red max-md:w-full max-md:h-full max-md:pb-24 max-md:pt-12 '>

        {carrinho.map((item: any, idx) => (
          <li className='flex gap-4 py-6 max-md:pb-20 border-y border-just-white text-just-white ' key={idx}>

            <Image className="rounded-md" alt={item[0]} width={150} height={150} src={item[1]} />

            <div className='text-center justify-center flex-column'>

              <p>{item[0]}</p>
              <span>{item[2]}</span>

            </div>

          </li>

        ))}
        {carrinho.length == 0 ? <div className='text-just-white flex justify-center items-center'><h1>carrinho vazio</h1></div> :
          <div
            onClick={() => { setSure(!sure) }}
            className=" 
              p-4 
              flex
              max-md:fixed
              max-md:bottom-0
              max-md:left-0
              font-2xl
              max-md:w-full
              items-center
              border-2
              border-just-black 
              justify-center 
              cursor-pointer 
              bg-just-white 
              rounded-sm 
              text-just-black">
            Comprar
          </div>
        }

      </ul>

      {sure && (
        <Modal.Root>

          <Modal.Body>

            <Modal.Title>
              Tem certeza?

              <Modal.Icon>
                <X onClick={() => setSure(false)} color="white" size={30} />
              </Modal.Icon>

            </Modal.Title>

            <Modal.Content className="p-8">
              <div className='flex w-auto'>
                <div
                  onClick={async () => {
                    //loading no botao depois de apertar no sim
                    setLoading(true)
                    await sleep(3000)
                    setLoading(false)

                    setNotify(!notify)
                    setSure(!sure)

                    router.refresh()
                    //redirecionar a home no mobile
                    router.push('/cars')
                    localStorage.removeItem('cards')
                    await sleep(7000)
                    setNotify(false)

                  }}

                  className="ml-2 
                p-4
                font-semibold  
                flex 
                items-center 
                justify-center 
                cursor-pointer 
                bg-just-white 
                rounded-md 
                text-just-black">
                  {loading ? <SpinLoading /> : 'sim'}
                </div>
                <div
                  onClick={() => {
                    setSure(false)
                  }}
                  className="ml-2 
              p-4
              font-semibold  
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              bg-dark-red 
              rounded-md 
              text-just-white">
                  não
                </div>
              </div>
            </Modal.Content>
          </Modal.Body>
        </Modal.Root>
      )}

      <AnimatePresence> {/* <== garante que o componente vai ser animado apos ser removido da DOM */}
        {notify && (
          <Notify.Root>
            <Notify.Title><Text first='Underground🔰' second="地下へようこそ🔰" /> </Notify.Title>

            <Notify.Body>O Underground entrará em contato</Notify.Body>
          </Notify.Root>
        )}
      </AnimatePresence>
    </div>
  )
}