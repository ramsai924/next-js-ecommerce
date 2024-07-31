import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const db = await getDb();
     const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const categoryId = searchParams.get('categoryId') || ''

    if (type === 'category' && !categoryId) {
      return NextResponse.json(
            { data: null, success: true, message: 'Category ID is required' },
            { status: 400 }
          );
    }

    if (categoryId && !ObjectId.isValid(categoryId)) {
        return NextResponse.json({ message: 'Invalid Message ID', data: null, error: true }, { status: 400 });
    }

    switch(type){
      case 'all':
        let products = await db.collection('categories').aggregate([
          {
            $lookup: {
                from: 'products',
                localField: '_id',
                foreignField: 'categories',
                as: 'products'
            }
        },
          {
            $project: {
              category: "$category",
              products: "$products"
            }
          }
        ]).toArray();
        
        return NextResponse.json(
          { data: products, success: true, message: 'Products retrieved successfully' },
          { status: 200 }
        );
      case 'category':
        const categoryWithProducts = await db.collection('categories').aggregate([
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
        },
          {
            $project: {
              _id: 0,
              category: '$category',
              products: '$products'
            }
          }
        ]).toArray();
        
        return NextResponse.json(
          { data: categoryWithProducts, success: true, message: 'Category Products retrieved successfully' },
          { status: 200 }
        );
      default: 
        return NextResponse.json(
          { data: [], success: true, message: 'Products retrieved successfully' },
          { status: 200 }
        );
    }
  } catch (error: any) {
    return NextResponse.json(
      { data: null, success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const productInfo = await request.json();
    productInfo.categories = productInfo.categories.map((category: string) => new ObjectId(category))
    // Ensure productInfo is an object
    if (typeof productInfo !== 'object' || Array.isArray(productInfo) || !productInfo) {
      throw new Error('Invalid product info format');
    }

    const db = await getDb();
    const response = await db.collection('products').insertOne(productInfo);

    if (response.insertedId) {
        return NextResponse.json(
          { data: { _id: response.insertedId, ...productInfo }, success: true, message: 'Successfully created product' },
          { status: 201 }
        );
    } else {
        return NextResponse.json(
          { data: null, success: false, message: 'Product creation failed' },
          { status: 500 }
        );
    }
  } catch (error: any) {
    return NextResponse.json(
      { data: null, success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
