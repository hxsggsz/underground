"use client";
import Image from "next/image";
import { Card } from "./cards";
import { useContext, useState } from 'react'
import { X } from "phosphor-react";
import { Notify } from "./notification";
import { Text } from "../../components/text/text";
import { Modal } from "../../components/modal/modal";
import { AnimatePresence } from 'framer-motion';
import { useItemsQuery } from "../../graphql/generated/graphql";
import { SearchContext } from "../../pages/context/searchContext";

export default function Cars() {
  const [sure, setSure] = useState(false)
  const [notify, setNotify] = useState(false)
  const { search } = useContext(SearchContext)

  const [{ data }] = useItemsQuery()
  //tipagem gerada pelo codegen 🤓
  return (
    <div className="w-full
     gap-5  
     h-screen 
     flex 
     items-center 
     justify-center 
     flex-wrap">
      {data?.itemss
        .filter(cars => {
          const nameNormalized = cars?.name?.toLowerCase()
          const searchValue = search.toLowerCase()
          return nameNormalized?.includes(searchValue)
        })
        .map(cards => (
          <Card.Root key={cards.url}>
            <Image
              className="rounded-t-lg 
          border border-just-black"
              width={410}
              height={150}
              src={cards?.url}
              alt={cards?.name}
            />

            <Card.Text>
              <h1 className="p-2">{cards.name?.toUpperCase()}</h1>
              <p className="p-2">{cards.price}</p>

              <div
                onClick={() => setSure(!sure)}
                className="ml-2 
            p-2 
            flex 
            items-center 
            justify-center 
            cursor-pointer 
            bg-just-white 
            rounded-sm 
            text-just-black">
                comprar
              </div>

            </Card.Text>
          </Card.Root>
        ))}
      
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
                    setTimeout(() => {
                      setNotify(false)
                    }, 7000)
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
                  onClick={() => setSure(false)}
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
  );
}
