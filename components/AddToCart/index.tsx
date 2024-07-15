'use client'

import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

function AddToCart() {
    const [added, setAdded] = useState<boolean>(false)
  return (
    <div className='flex items-center'>
        {
            added && (
                <>
                    <div className='p-2 rounded-xl bg-em-light-green text-white' onClick={(e: any) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setAdded(!added)
                    }}>
                        <Minus  size={18} absoluteStrokeWidth/>
                    </div>
                    <div className='p-2 '>
                        <p>0</p>
                    </div>
                </>
            )
        }
        <div className='p-2 rounded-xl bg-em-light-green text-white' onClick={(e: any) => {
            e.preventDefault()
            e.stopPropagation()
            setAdded(!added)
        }}>
            <Plus size={18} absoluteStrokeWidth/>
        </div>
    </div>
  )
}

export default AddToCart