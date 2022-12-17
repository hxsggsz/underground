import { createContext, ReactNode, useEffect, useState } from "react";

type ProviderProps = {
  children: ReactNode
}

type CardContext = {
  SetInStorage: (name: string, url: string, price: string) => void
  carrinho: StateTypes[]
}

type StateTypes = {
  name: string
  url: string
  price: string
}

export const CardContext = createContext({} as CardContext)

export const CardProvider = ({ children }: ProviderProps) => {

  const getList = () => {
    /**
     *next roda isso pelo servidor, e como o localStorage só existe no lado do client
     *ele acusa erro na hora do build, esse if é pra verificar se a propiedade 'window'
     *existe, se existir é porque está no lado do client e executa o localStorage normalmente 
     */
    // if (typeof window !== 'undefined') {
    let local = localStorage.getItem('cards')
    if (local) {
      return JSON.parse(local)
    }
    // }  
    return []
  }

  const [carrinho, setCarrinho] = useState<StateTypes[]>(getList())
  /*
  criar uma função que recebe como parametros: name, pricee url e fazer com que essa função adicione no localstorage o componente
  */
  const SetInStorage = (name: string, url: string, price: string) => {

    let folders = []

    folders.push(name, url, price)

    let local = localStorage.setItem('cards', JSON.stringify([...carrinho, folders]))

    setCarrinho(getList())
  }

  return (
    <CardContext.Provider value={{ SetInStorage, carrinho }}>{children}</CardContext.Provider>
  )
}