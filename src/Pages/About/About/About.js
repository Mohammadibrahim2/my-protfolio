import React from "react";
import img from "../../asssets/pf.jpg"

const About = ({ dark }) => {
    return (
        <div className={`${dark ? "bg-black" : "bg-gray-200 "}   h-auto `}>
            <button className={`mx-5 px-4 py-2 bg-gray-400 text-2xl text-black font-semibold`}>About</button>
            <h2 className="text-4xl text-black font-bold p-5">
                Who I am ?
            </h2>
            <div className=" h-full flex flex-col justify-start items-start px-3 py-5">
                <div className="my-5 lg:w-full ">
                    <img className="  w-full h-[400px] object-contain" src={img} />
                </div>
                <div>
                    <div className="text-black my-5">

                        <h1 className="text-2xl text-black font-semibold">Assalamualikum ,I am Mohammad Ibrahim.</h1>
                        <h2 className="text-xl ">Front-End Web developer</h2>

                    </div>
                    <p className="text-black">I am studying in Applied Mathematics.I love to do math.I am also interest in learning about Islam.So, I try to study islamic books in my spare time and try to
                    learn about various aspects of Islam .</p><br/>
                    <p className="text-black">
                        Apart from all these things ,I am also interested at web developing .I gained precise knowledge about web dveloping in a span of few month within a limited time,I was able to do many projects.But, still I have a lot to learn about web developing and I am trying.
                    </p>

<button className="my-4 px-5 py-2 bg-black text-white"><a href="https://drive.google.com/file/d/1e2cUa9EsBIgdD9yMxIdmV0KbSgEz-Ziz/view?usp=share_link">Download Cv</a></button><br/>
<p></p>
<hr className="my-3"></hr>


                </div>

            </div>
        </div>
    )

}
export default About