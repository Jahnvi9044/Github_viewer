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


interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    language: string;
    // add more fields if needed
  }
  
  interface RepoCardProps {
    repo: Repo;
  }

export function RepoCard({ repo }: RepoCardProps) {

    console.log(repo)

  return (
    <Card className=" w-[300px] md:w-[350px] ">
      <CardHeader>
        <CardTitle>{repo.name}</CardTitle>
        <CardDescription>{repo.description}</CardDescription>
      </CardHeader> 
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
           
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {repo.language}
      </CardFooter>
    </Card>
  )
}
