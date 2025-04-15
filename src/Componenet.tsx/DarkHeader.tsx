import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react'
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import Logo from '/LogoNavDummy.png'
const DarkHeader = () => {

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] =useState(false)
    useEffect(()=>{
        
        function handleScroll(){
            const currentScroll = window.scrollY;

            setIsAtTop(currentScroll===0);

            if(currentScroll>lastScrollY)
            {
               setShowNavbar(false);

            }
            else setShowNavbar(true);

            setLastScrollY(currentScroll)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[lastScrollY])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-gray-200  transition-transform duration-300 
    ${showNavbar ? "translate-y-0" : "-translate-y-full"}
    ${isAtTop?"bg-cyan-200/50":"bg-white/30"}`}>


   
    <div className="flex p-5 left-0 justify-between items-center   ">
     <div className="flex items-center gap-1">
    <Sheet >
      <SheetTrigger>
      <div className=" lg:hidden ">
        <Menu className="h-10 w-10 transition duration-200 cursor-pointer p-2 border rounded-md hover:bg-gray-100"></Menu>
        <span className="sr-only">Toggle Navigation Menu</span>
      </div>
      </SheetTrigger>
      <SheetContent  side={"left"}>
        <SheetHeader>
          <SheetTitle>Hello</SheetTitle>
          <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        
          </SheetDescription>

          <ul className="flex flex-col gap-2 ">
            <li>
                <Link to="/"  className="font-medium hover:bg-slate-50 p-2  border-0 rounded-md ">Home</Link>
            </li>
            <li>
                <Link to="/" className="font-medium hover:bg-slate-50 p-2  border-0 rounded-md ">About</Link>
            </li>
            <li>
                 <Link to="/" className="font-medium hover:bg-slate-50 p-2  border-0 rounded-md">Contact</Link>
            </li>
            <li>
                 <Link to="/" className="font-medium hover:bg-slate-50 p-2  border-0 rounded-md ">Menu</Link>
            </li>
          </ul>
          <Button variant={"outline"}>Sign-Up</Button>
           <Button>Sign-In</Button>
        </SheetHeader>
      
      </SheetContent>
    </Sheet>

    <div>

        {/* <h1 className="cursor-pointer  ">Logo</h1> */}
        <img src={Logo} className="w-12" alt="" />
    </div>
    </div>
  
    <div className="flex gap-5 items-center">
        <nav className="hidden lg:flex">
          <ul className="flex gap-2  ">
            <li>
                <Link to="/" className="font-medium hover:bg-slate-50 p-2  border-0 rounded-md px-4">Home</Link>
            </li>
            <li>
                <Link to="/" className="font-medium hover:bg-slate-50 p-2  border-0 rounded-md px-4">About</Link>
            </li>
            <li>
                 <Link to="/" className="font-medium hover:bg-slate-50 p-2  border-0 rounded-md px-4">Contact</Link>
            </li>
            <li>
                 <Link to="/" className="font-medium hover:bg-slate-50 p-2  border-0 rounded-md px-4">Menu</Link>
            </li>
          </ul>
          
        </nav>
    
        <div className="flex ml-auto gap-2">
          <Button variant={"outline"}>Sign-Up</Button>
          <Button>Sign-In</Button>
        </div>
        </div>
    </div>
    </nav>
  
  )
}

export default DarkHeader



// <nav className={` sticky top-0 bg-* backdrop-filter transition-transform duration-300 backdrop-blur-lg bg-opacity-30 border-b border-gray-200`+
//     `${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>

   
//     <div className="flex p-5 left-0 justify-between items-center   ">
//      <div className="flex items-center gap-1">
//     <Sheet >
//       <SheetTrigger>
//       <div className=" lg:hidden ">
//         <Menu className="h-10 w-10 transition duration-200 cursor-pointer p-2 border rounded-md hover:bg-gray-100"></Menu>
//         <span className="sr-only">Toggle Navigation Menu</span>
//       </div>
//       </SheetTrigger>
//       <SheetContent  side={"left"}>
//         <SheetHeader>
//           <SheetTitle>Hello</SheetTitle>
//           <SheetDescription>
//           This action cannot be undone. This will permanently delete your account
//           and remove your data from our servers.
        
//           </SheetDescription>
//           <Button variant={"outline"}>Sign-Up</Button>
//            <Button>Sign-In</Button>
//         </SheetHeader>
      
//       </SheetContent>
//     </Sheet>

//     <div>
//         <h1 className="cursor-pointer  ">Logo</h1>
//     </div>
//     </div>
  
//     <div className="flex gap-5 items-center">
//         <nav className="hidden lg:flex">
//           <ul className="flex gap-2  ">
//             <li>
//                 <Link to="/" className="font-medium hover:bg-slate-50 p-2  border-0 rounded-md px-4">Home</Link>
//             </li>
//             <li>
//                 <Link to="/" className="font-medium hover:bg-slate-50 p-2  border-0 rounded-md px-4">About</Link>
//             </li>
//             <li>
//                  <Link to="/" className="font-medium hover:bg-slate-50 p-2  border-0 rounded-md px-4">Contact</Link>
//             </li>
//             <li>
//                  <Link to="/" className="font-medium hover:bg-slate-50 p-2  border-0 rounded-md px-4">Menu</Link>
//             </li>
//           </ul>
          
//         </nav>
    
//         <div className="flex ml-auto gap-2">
//           <Button variant={"outline"}>Sign-Up</Button>
//           <Button>Sign-In</Button>
//         </div>
//         </div>
//     </div>
//     </nav>