import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
const navItems = [
    {
        title: 'Profile',
        link: '/profile'
    },
    {
        title: 'Orders',
        link: '/orders'
    },
    {
        title: 'Favourite',
        link: '/favourite'
    }
]

function AvatarComponent() {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger>
        <Avatar className='cursor-pointer'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {
            navItems.map((item: any, i: number) => <DropdownMenuItem className='cursor-pointer' key={i}><Link href={item.link}>{item.title}</Link></DropdownMenuItem>)
        }
    </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarComponent


// 