import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import React from 'react'
import { Menu } from "lucide-react"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex p-5 left-0 justify-between items-center  sticky top-0 ">
     <div className="flex items-center gap-1">
    <Sheet >
      <SheetTrigger>
      <div className="lg:hidden ">
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
          <Button variant={"outline"}>Sign-Up</Button>
           <Button>Sign-In</Button>
        </SheetHeader>
      
      </SheetContent>
    </Sheet>

    <div>
        <h1 className="cursor-pointer">Logo</h1>
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
  
  )
}

export default Header