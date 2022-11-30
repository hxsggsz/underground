import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


export interface StateTypes {
  search: string
  setSearch: Dispatch<SetStateAction<string | ''>>
}

export const SearchContext = createContext<StateTypes | any>({ search: "search", setSearch: (state: StateTypes) => state })

