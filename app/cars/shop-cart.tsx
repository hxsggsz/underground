import { useContext, useState } from "react"
import { CardContext } from "../../context/cardContext"
import Image from 'next/image'
import { Modal } from '../../components/modal/modal'
import { Text } from '../../components/text/text'
import { AnimatePresence } from "framer-motion"
import { X } from "phosphor-react"
import { Notify } from "./notification"
import { useRouter } from "next/navigation"

export default function ShopCart() {
  const router = useRouter()
  const [sure, setSure] = useState(false)
  const [notify, setNotify] = useState(false)
  const { carrinho } = useContext(CardContext)

  return (
    <>
      <ul className='absolute p-5 pr-10  bg-just-black '>

        {carrinho.map((item: any, idx) => (
          <li className='flex gap-4 py-4 border-y border-slate-700' key={idx}>

            <Image alt={item[0]} width={150} height={150} src={item[1]} />

            <div className='text-center justify-center flex-column'>

              <p>{item[0]}</p>
              <span>{item[2]}</span>


            </div>

          </li>

        ))}
        {carrinho.length == 0 ? <div>carrinho vazio </div> :
          <div
            onClick={() => { setSure(!sure) }}
            className="ml-2 
              p-2 
              flex 
              items-center 
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
                  onClick={() => {
                    setNotify(!notify)
                    setSure(!sure)
                    localStorage.removeItem('cards')
                    setTimeout(() => {
                      setNotify(false)
                    }, 7000)
                    router.refresh()
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
                  sim
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
    </>
  )
}