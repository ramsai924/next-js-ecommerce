import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const db = await getDb();
    const userCart = await request.json()

    const findUserCart = await db.collection('cart').findOne({ userId: new ObjectId(userCart.userId) })
    if(userCart.products.length > 0){
        userCart.products = userCart.products.map((product: any) => ({
            ...product,
            productId: new ObjectId(product.productId),
        }))
    }

    let response = null;
    if(findUserCart){
      response = await db.collection('cart').findOneAndUpdate({ userId: new ObjectId(userCart.userId) }, { $set: { products: userCart.products } })
    }else{
       response = await db.collection('cart').insertOne({
        ...userCart,
        userId: new ObjectId(userCart.userId)
       })
    }

    return NextResponse.json(
      { data: response, success: true, message: 'Added to cart successfully' },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { data: null, success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}