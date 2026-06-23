"use client";
import { createContext } from "react";

export const Context = createContext(null);

function GlobalState({children}){
    return <Context.Provider value={{}}>{children}</Context.Provider>
}

export default GlobalState
