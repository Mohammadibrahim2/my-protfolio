import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import About from "../../Pages/About/About/About"
import Blogs from "../../Pages/Blogs/Blogs/Blogs"
import ContactMe from "../../Pages/ContactMe/ContactMe/ContactMe"
import Header from "../../Pages/Header/Header/Header"
import Home from "../../Pages/Home/Home/Home"
import Projects from "../../Pages/Projects/Projects/Projects"
import SubProject from "../../Pages/Projects/Projects/Subproject"


export const router=createBrowserRouter([


{
    path:"/",
    element:<Main></Main>,
    children:[



     
        
        {
            path:"/blogs",
            element:<Blogs></Blogs>
        },
        
        {
            path:"/contact",
            element:<ContactMe></ContactMe>
        },
        
        {
            path:"/about",
            element:<About></About>
        },
        
        {
            path:"/",
            element:<Header></Header>
        },
        
        {
            path:"/projects",
            element:<Projects></Projects>
        },
        {
            path:"/subprojects/:id",
            element:<SubProject></SubProject>,
            loader:({params})=>fetch(`https://my-portfolio-server-sigma.vercel.app/subprojects/${params.id}`)
        }
    ]
}








])