'use client'
import { getUserCart } from "@/actions/cart"
import CarList from "@/components/CartList"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import userCartStore from "@/lib/store/cart"
import { DialogTitle } from "@radix-ui/react-dialog"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function CartModal() {
  const [cartItems, setCartItems] = useState<any>([])
  const router = useRouter()
  const cartState = userCartStore((state: any) => state)
  const { cart, addToCart } = cartState;
  
  useEffect(() => {
    let products = []
    if(cart && cart.length > 0){
      products = cart.map((product: any) => ({
        ...product.details
      }))
      setCartItems(products)
    }
  }, [cart])

  console.log('cart', cart)
  return (
    <Dialog 
      open
      onOpenChange={(isOpen: any) => {
        if(!isOpen){
          router.back()
        }
      }}
    >
      <DialogContent className="max-h-[500px] overflow-y-auto">
        <div>
          <h2 className="text-xl font-bold">Cart</h2>
        </div>
        <div>
          <CarList products={cartItems}/>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CartModal