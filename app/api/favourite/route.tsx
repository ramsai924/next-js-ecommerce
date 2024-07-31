import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const db = await getDb();
    const userFavourite = await request.json()

    const finduserFavourite = await db.collection('favourite').findOne({ userId: new ObjectId(userFavourite.userId) })
    if(userFavourite.products.length > 0){
        userFavourite.products = userFavourite.products.map((product: any) => ({
            ...product,
            productId: new ObjectId(product.productId),
        }))
    }

    let response = null;
    if(finduserFavourite){
      response = await db.collection('favourite').findOneAndUpdate({ userId: new ObjectId(userFavourite.userId) }, { $set: { products: userFavourite.products } })
    }else{
       response = await db.collection('favourite').insertOne({
        ...userFavourite,
        userId: new ObjectId(userFavourite.userId)
       })
    }

    return NextResponse.json(
      { data: response, success: true, message: 'Added Favourite List successfully' },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { data: null, success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}