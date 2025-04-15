import { Button } from "@/components/ui/button"
import Header from "./Componenet.tsx/Header"
import { BrowserRouter, createBrowserRouter ,RouterProvider} from "react-router-dom"
import DarkHeader from "./Componenet.tsx/DarkHeader"
import Main from "./Componenet.tsx/Main"
import { Router } from "react-router-dom"
import Body from "./Componenet.tsx/Body"

import './App.css'
import UserPage from "./Componenet.tsx/UserPage"

function App() {

   const router = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:'/',
          element:<Main/>
        },
        {
          path:"/user/:username",
          element:<UserPage/>
        }
      ]
    },
    {
      path:"/user/:username",
      element:<UserPage/>
    }
   ]);


  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App




// Tip 1 :

// How to make a circular imgae without streaching or sweezing it 
{/* <div className="flex justify-center w-56 h-56 rounded-full overflow-hidden " > 
          <img 
          className="  " 
          src="https://plus.unsplash.com/premium_photo-1681506669115-cb6b2d30dbc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXJsfGVufDB8fDB8fHww" alt="" />
       </div> */}
       