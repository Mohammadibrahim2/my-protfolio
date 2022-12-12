import React ,{useRef}from "react";

import {FaMobileAlt} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const ContactMe = ({dark}) => {

    const form = useRef();

    const handleEmail=(event)=>{
        event.preventDefault()
        
    emailjs.sendForm('gmail', 'template_iehp8qs', event.target, 'lbfPLwnf1YcRH3-Ac')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    toast.success("eamil is successfully send")
    event.target.reset()
    

    }

    const contacts=[
        {
            icon:<FaMobileAlt></FaMobileAlt>,
            title:"+88 01632846454",
           

        },
        {
            icon:<HiLocationMarker></HiLocationMarker>,
            title:"Noakhali,Maijdee",
         
        },
        {
            icon:<FiMail></FiMail>,
            title:"mohammadibrahim6454@gmail.com",
           
        }
    ]

    return (
        <div className={`pb-4 w-full h-full ${dark?"bg-black":"bg-gray-200"} `}>
            <h1 className="text-blue-700 text-4xl font-semibold text-center py-5 relative">Contact Me</h1>

            {/* 1st section:- */}
            <div className="grid lg:grid-cols-2 grid-cols-1" id="contact">
                {/* 1.1 section for card info */}
                <div className="contact-info-1 ">
                    
                    {
                        contacts.map(contact=><div className={`px-5 py-5 flex justify-start  items-center ${dark?"bg-black text-white":"bg-gray-200 text-black"} my-3`}>

                          <div className="mr-2 text-4xl text-blue-700 ">{contact.icon}</div>
                            <div>
                                <h1 className="my-3 text-2xl font-semibold">{contact.title}</h1>
                             
                            </div>
                        </div>
                            
                            )
                    }

                </div>
                {/* 1.2 section for email from:- */}
                <div className={`contact-info-2  lg:ml-2 cols-span-2 w-full ${dark?"bg-black text-white":"bg-gray-200 text-black"}`}  >
                    {/* 1.2.1 section for heading */}
                    <div><h1 className={` text-2xl font-semibold ${dark?"text-white":"text-black"} my-4 mx-3`}>How Can I Help You?</h1></div>
                      {/* 1.2.2 section for form */}
                    <div className="w-full flex flex-row justify-between ">
                        <form  ref={form} onSubmit={handleEmail} className={`w-full ${dark?"bg-black":"bg-gray-200"} text-start `} >
                            <div className="flex flex-col mx-5">
                            <input name="name" type="text" placeholder="full Name" className="input input-bordered input-info  md:w-96 w-full bg-white" />
                            <input name="email" type="text" placeholder="Email" className="my-3 input input-bordered input-info md:w-96 w-full bg-white " />
                           
                            </div>
                            <div className="w-full">
                            <textarea name="message"className="my-3 mx-3 textarea textarea-info bg-white border-2 "cols={54} placeholder="Write your text"></textarea>
                       
                        </div>
                    <button className="border-2 border-blue-500 px-7 py-2 mx-3 rounded-full bg-gray-200 text-black hover:bg-blue-500 hover:text-white ">Send message</button>
                           
                        </form>
                    </div>
                      {/* 1.2.3 section for button */}
                    

                </div >

            </div>
            {/* 2nd section for googlemap:- */}

            <div className="contact-info-3">

            </div>
        </div>
    )

}
export default ContactMe