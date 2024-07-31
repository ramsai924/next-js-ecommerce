import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,  { params }: any) {
  try {
    const db = await getDb();
    const userId = params.userId

    if (!ObjectId.isValid(userId)) {
        return NextResponse.json({ message: 'Invalid Message ID', data: null, error: true }, { status: 400 });
    }

    const userCart = await db.collection('cart').aggregate([
      {
        $match: { userId: new ObjectId(userId) }
      },
      {
        $lookup: {
          from: 'products', // Collection to join
          localField: 'products.productId', // Field from the carts collection
          foreignField: '_id', // Field from the products collection
          as: 'productDetails' // Output array field
        }
      },
      {
        $unwind: '$products'
      },
      {
        $lookup: {
          from: 'products',
          localField: 'products.productId',
          foreignField: '_id',
          as: 'productDetail'
        }
      },
      {
        $unwind: '$productDetail'
      },
      {
        $group: {
          _id: '$_id',
          userId: { $first: '$userId' },
          products: {
            $push: {
              quantity: '$products.quantity',
              productId: '$products.productId',
              details: '$productDetail'
            }
          }
        }
      }
    ]).toArray();
    
    return NextResponse.json(
      { data: userCart, success: true, message: 'Cart retrieved successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { data: null, success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
