import { createContext, useContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface SearchTypes {
  children: ReactNode
}

export interface StateTypes {
  search: string
  setSearch: Dispatch<SetStateAction<string | ''>>
}

export const SearchContext = createContext<StateTypes | any>({ search: "search", setSearch: (state: StateTypes) => state })

export const SearchProvider = ({ children }: SearchTypes) => {
  const [search, setSearch] = useState<StateTypes | ''>('')
  return (
    <SearchContext.Provider value={{ search, setSearch }}>{children}</SearchContext.Provider>
  )
}