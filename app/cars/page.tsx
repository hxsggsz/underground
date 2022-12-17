"use client";
import Image from "next/image";
import { Card } from "./cards";
import { useContext, useState } from 'react'
import { useItemsQuery } from "../../graphql/generated/graphql";
import { SearchContext } from "../../context/searchContext";
import { CardContext } from "../../context/cardContext";
import { Notify } from "./notification";
import { AnimatePresence } from "framer-motion";
import { Text } from "../../components/text/text";
import { sleep } from "../../lib/sleep";

export default function Cars() {
  const [shopNotify, setShopNotify] = useState(false)
  const { search } = useContext(SearchContext)
  const { SetInStorage } = useContext(CardContext)

  const [{ data }] = useItemsQuery()
  //tipagem gerada pelo codegen 🤓
  return (
    <div className="w-full
     gap-5
     pt-32
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
              src={cards.url}
              alt={cards.name}
            />

            <Card.Text>
              <h1 className="p-2">{cards.name?.toUpperCase()}</h1>
              <p className="p-2">{cards.price}</p>

              <div
                onClick={async () => {
                  SetInStorage(cards.name, cards.url, cards.price)
                  setShopNotify(true)
                  await sleep(7000)
                  setShopNotify(false)
                }}
                className="ml-2 
                p-2 
                flex 
                items-center 
                justify-center 
                cursor-pointer 
                bg-just-white 
                rounded-sm 
                text-just-black">
                Adicionar ao carinho
              </div>

            </Card.Text>
          </Card.Root>
        ))}


      <AnimatePresence> {/* <== garante que o componente vai ser animado apos ser removido da DOM */}
        {shopNotify && (
          <Notify.Root>
            <Notify.Title><Text first='Underground🔰' second="地下へようこそ🔰" /> </Notify.Title>

            <Notify.Body>Carro adicionado ao carrinho, olhe o menu🚗</Notify.Body>
          </Notify.Root>
        )}
      </AnimatePresence>
    </div>
  );
}
