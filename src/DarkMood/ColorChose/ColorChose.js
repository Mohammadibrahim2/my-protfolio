import { createContext, useState } from "react";

export const ColorChose=createContext()

const ChoseYourColor=({children})=>{
    const[color,setColor]=useState("red-700")
    console.log(color)

    const colorinfo={color,setColor}

    return(
        <ColorChose.Provider value={colorinfo}>
            {children}
        </ColorChose.Provider>
    )

}
export default ChoseYourColor