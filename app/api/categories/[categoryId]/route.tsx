import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  try {
    const db = await getDb();
    const categoryId = params.categoryId
    const response = await db.collection('categories').aggregate([
        {
            $match: { _id: new ObjectId(categoryId) }
        },
        {
            $lookup: {
                from: 'products',
                localField: '_id',
                foreignField: 'categories',
                as: 'products'
            }
        }
    ]).toArray();
    
    return NextResponse.json(
      { data: response, success: true, message: 'category products retrieved successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { data: null, success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}