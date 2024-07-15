import { Heart } from 'lucide-react'
import React from 'react'

function AddToFavourite() {
  return (
    <div>
        {
            false ? <Heart fill='red' strokeWidth={0} /> : <Heart absoluteStrokeWidth />
        }
    </div>
  )
}

export default AddToFavourite