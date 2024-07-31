import { getDb } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const db = await getDb();
    const response = await db.collection('categories').find().toArray();
    
    return NextResponse.json(
      { data: response, success: true, message: 'categories retrieved successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { data: null, success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}