import { ReactNode, useState } from "react"
import { StateTypes, SearchContext } from "./searchContext"

interface SearchTypes {
  children: ReactNode
}

const SearchProvider = ({ children }: SearchTypes) => {
  const [search, setSearch] = useState<StateTypes | ''>('')
  return (
    <SearchContext.Provider value={{ search, setSearch }}>{children}</SearchContext.Provider>
  )
}

export default SearchProvider