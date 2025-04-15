import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const Shimmer = () => {
  return (
    <div className="flex items-center space-x-4 gap-10">
    <Skeleton className="h-44 w-44 backdrop-blur-lg rounded-full bg-gray-200/80" />
  <div className="space-y-2">
  <div className="flex flex-col space-y-3 ">
  <Skeleton className="h-52 w-96 backdrop-blur-lg backdrop-filter bg-opacity-30 rounded-xl bg-gray-200/80" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-80 backdrop-blur-lg bg-gray-200/80" />
    <Skeleton className="h-4 w-96 backdrop-blur-lg bg-gray-200/80" />
  </div>
</div>
  </div>
  </div>
  )
}

export default Shimmer