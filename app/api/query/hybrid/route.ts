import { NextRequest, NextResponse } from 'next/server';
import articles from '@/utils/articles.json'


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { guest_id, query, top_k } = body;

    console.log(guest_id, query, top_k)

    return NextResponse.json({success: true, data: articles}, {status: 200}
);
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
