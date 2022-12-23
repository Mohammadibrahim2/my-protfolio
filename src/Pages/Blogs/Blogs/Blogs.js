import React, { useContext } from "react";
import { DarkMood } from "../../../DarkMoodLightMood/DArkMoodLightMood";

const Blogs=()=>{

    const {dark}=useContext(DarkMood)
    return(
        <div id="blogs"className={`${dark? "bg-slate-800":"bg-gray-200"} text-blue-800 h-full flex `}> <h1 className={`text-4xl text-blue-700  font-semibold text-center`}>Blogs</h1>

<h1 className=" text-center text-2xl text-blue-700 flex justify-center items-center">Comming soon..........</h1>
        </div>
    )

}
export default Blogs