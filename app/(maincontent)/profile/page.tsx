import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function Profile() {
  return (
    <div className='flex flex-col gap-4 p-3 md:p-6 w-[100%] md:w-[80%] mx-auto'>
        <div>
            <p className='font-Robot text-xl font-bold'>Account</p>
        </div>
        <hr />
        <div className='flex flex-col justify-center gap-6 border-gray-500 border-2 rounded-md p-6 md:p-8'>
            <div className='grid grid-flow-row gap-2 place-items-center w-[150px]'>
                <Avatar className='cursor-pointer w-[150px] h-[150px]'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='text-sm font-semibold cursor-pointer text-cyan-600'>Edit</p>
            </div>
            <div className='flex-1 flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <p className='text-lg font-bold'>Name</p>
                    <p>Ramsai</p>
                    <p className='text-sm font-semibold cursor-pointer text-cyan-600'>Change Name</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-lg font-bold'>Email</p>
                    <p>ramsai924@gmail.com</p>
                    <p className='text-sm font-semibold cursor-pointer text-cyan-600'>Change Email</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <div>
                <p className='font-Robot text-lg font-bold'>Your Orders</p>
            </div>
            <hr />
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Profile