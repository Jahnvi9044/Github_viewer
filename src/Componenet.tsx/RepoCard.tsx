import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Repo {
    id: number;
    name: string;
    owner: {
      user_view_type: string;
    };
    language:string;
    forks:number;
    watchers:number;
    open_issues:number;
    // add other properties if needed
  };

  
  
  interface RepoCardProps {
    repo: Repo;
  }

export function RepoCard({ repo }: RepoCardProps) {

    console.log(repo)

  return (
    <div key={repo.id} className='flex flex-col  space-y-3 mt-4 '>
        <div className='flex gap-2'>
            <h1 className='text-blue-500 font-bold text-xl'>{repo.name} 
            <span>
            <Badge variant="outline" className='mx-2 rounded-full'>{repo.owner.user_view_type}</Badge>
            </span>
            </h1>
                                           
        </div>
         <div className='flex gap-3'>
             <p>{repo.language}</p>
             <p>forks-{repo.forks}</p>
             <p className='hidden md:flex'>open_issues-{repo.open_issues}</p>
             <p>watchers-{repo.watchers}</p>
                                   
         </div>
         <hr className='w-[90%] my-2 md:my-4' />
                                      
         </div>
  )
}
