import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



interface User {
    id: number;
    name: string;
    html_url: string;
    bio: string;
    location: string;
    public_repos: number;
    public_gists: number,
    followers: number,
    following: number,
    // add more fields if needed
  }
  
  interface UserCardProps {
    user: User;
  }

const InfoCard = ({ user }: UserCardProps) => {
  return (
    <Card className="">
         <CardHeader>
           <CardTitle>{user.name}</CardTitle>
           <CardDescription>{user.bio}</CardDescription>
         </CardHeader> 
         <CardContent>
           <form>
             <div className="grid w-full items-center gap-4">
              
             </div>
           </form>
         </CardContent>
         <CardFooter className="flex justify-between">
           {user.location}
         </CardFooter>
       </Card>
  )
}

export default InfoCard