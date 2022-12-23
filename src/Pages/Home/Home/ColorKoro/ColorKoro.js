import React, { useContext } from "react";
import { ColorChose } from "../../../../DarkMood/ColorChose/ColorChose";
const ColorKoro=()=>{
    const {color,setColor}=useContext(ColorChose)
    console.log(color)
    return(
        <div>
            <button onClick={()=>setColor("pink-700")} className={`w-[100px] h-[40px] bg-pink-500 px-5 py-2`}>pink</button>
           
            <button onClick={()=>setColor("lime-700")} className={`w-[100px] h-[40px] bg-lime-400  px-5 py-2 mx-4`}>lime</button>
          
            <button onClick={()=>setColor("red-700")} className={`w-[100px] h-[40px] bg-violet-900 px-5 py-2 `}>perpule</button>

        </div>
    )
}
export default ColorKoro