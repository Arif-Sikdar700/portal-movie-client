import React, { createContext, useState } from 'react'
export const DarkContext = createContext()

export default function DarkProvider({children}) {
    const [dark, isDark] = useState(false)
    const [fav, setFav] = useState([])
    const [addFav, setAddFav] =useState([])
 
    const useInfo = {
		dark,
		isDark,
    fav,
    setFav,
    addFav,
    setAddFav
	};
    
  return (
    <DarkContext.Provider value={useInfo}>{children}</DarkContext.Provider>
  )
}
