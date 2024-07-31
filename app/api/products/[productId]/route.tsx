import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,  { params }: any) {
  try {
    const db = await getDb();
    const productId = params.productId

    if (!ObjectId.isValid(productId)) {
        return NextResponse.json({ message: 'Invalid Message ID', data: null, error: true }, { status: 400 });
    }

    const response = await db.collection('products').findOne({
        _id: new ObjectId(productId)
    })
    
    return NextResponse.json(
      { data: response, success: true, message: 'Product retrieved successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { data: null, success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}