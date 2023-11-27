import { createContext } from "react"

export const MyContext = createContext({});
export const ContextProvider = MyContext.Provider;
export const ContextComsumer = MyContext.Consumer