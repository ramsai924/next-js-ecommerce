'use client'
import CarList from "@/components/CartList"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { useRouter } from "next/navigation"

function CartModal() {
  const router = useRouter()
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
          <CarList />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CartModal