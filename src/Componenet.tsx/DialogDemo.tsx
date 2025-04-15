import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"

export function DialogDemo() {
    const [username , setUsername ] = useState("");
    const navigate = useNavigate();
    
    function handleInput(e : React.ChangeEvent<HTMLInputElement>){
       setUsername(e.target.value);
    }


    function handleSubmit(){
        if(username==="")
         {  
              <Toaster />
       console.log(username);
            }
            else 
           navigate(`/user/${username}`);
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        
        <Button >Enter Username</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter GitHub Username</DialogTitle>
          <DialogDescription>
            Input the GitHub usename to view the Profile 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div> */}
          <div className="grid grid-cols-1 place-items-center  md:grid-cols-4 md:items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input onChange={handleInput}  id="username" placeholder="Jahnvi9044" className="col-span-3" value={username} />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">Search</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
