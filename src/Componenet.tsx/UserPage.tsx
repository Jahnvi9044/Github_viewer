import React from 'react'
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import   Shimmer  from './Shimmer';
import { useState , useEffect } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { UserCard } from './UserCard';
import { RepoCard } from './RepoCard';
import InfoCard from './InfoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@/components/ui/input';
import { Badge } from "@/components/ui/badge"

type User = {
    bio: string;
    // add other fields if you have them, for example:
    name?: string;
    email?: string;
    followers?: number;
    following?:number;
    html_url?:string;

  };
  type Repo = {
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
  
const UserPage = () => {
    const [loading,setLoading] = useState(true);
    const {username} = useParams();
    const [user,setUser] = useState<User | null>(null);
    const [repos,setRepos] = useState<Repo[]>([]);
    console.log("in UserPage",username);
    
     useEffect(()=>{
        
        async function fetchMethod(){
           
            const res = await axios(`https://api.github.com/users/${username}`);
            console.log(res.data);
            const repository  = await axios(`https://api.github.com/users/${username}/repos`)
            setRepos(repository.data);
            console.log(repository.data);
            setLoading(false);
            setUser(res.data);


        }
        fetchMethod();
        
     },[]);

    return (
        loading?
   
   
   <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] transition-colors duration-700">
  
        {/* Animated Floating Circles */}
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-pink-400 opacity-30 blur-3xl rounded-full"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
  
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 opacity-30 blur-3xl rounded-full"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
    
    <Shimmer></Shimmer>
    </div> : 
    
        <> 
     {user && <div className=' items-center  mt-28 '>

            <div className='flex  items-center gap-5 md:gap-10 ml-5 lg:ml-16'>
                <div className="flex justify-center md:border-4 border-2 z-10 rounded-full overflow-hidden " > 
                  <img 

                  className=" z-10 md:w-56 md:h-56 w-14 h-14 " 
                  src="https://avatars.githubusercontent.com/u/103583793?v=4" alt="" />
                </div> 
                <div className='w-[60%] '>
                   <h1 className='font-bold md:text-4xl text-xl'> {user.name} </h1>
                   <h3 className='font-light md:text-2xl text-lg text-gray-600'> {username} </h3>
                   <hr className='w-full hidden md:flex my-2 md:my-10' />
                </div>
           </div>
          
          
             
         <div className='  md:flex gap-14 ml-5 lg:ml-10  '>

            <div className='flex-col w-72 mt-10'>
               <h1>{user.bio}</h1>
               <br />
               <div className='flex justify-start items-center gap-2'>
                <div><FontAwesomeIcon className='text-gray-600 text-2xl' icon={faGithub} /></div>
                
                <p className='text-md '>{user.html_url}</p>

               </div>

               <div className='flex justify-start items-center gap-2'>
                <div><FontAwesomeIcon className='text-gray-600' icon={faUserGroup}  /></div>
                <p> <span className='font-bold'>{user.followers}</span> <span className=' text-gray-700'> followers .</span> </p>
                <p> <span className='font-bold'>{user.following}</span> <span className=' text-gray-700'>following </span></p>
               </div>

               <div>
                <Button className='w-full my-4 '>Follow</Button>
               </div>

               
                
               <hr className='bg-gray-800' />

            </div>

            <div className='flex  flex-col w-full'>
                <div className='font-bold my-5 md:my-0'>Repositories <span className='w-10 h-10 rounded-full bg-gray-100 p-1' >{repos.length}</span></div>
                 <hr className='bg-gray-800 my-4 w-[90%]' />
                   
                  
                {repos.map((repo)=>( 
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
                
                ))}  
               




            </div>

         </div>
        
          </div>}

        </> 

  )
}

export default UserPage