import { NextRequest, NextResponse } from 'next/server';
import articles from '@/utils/articles.json'


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { article_id } = body;
    const article = articles.find((article) => article_id === article._id);
    if (!article) { return NextResponse.json({ error: 'Article not found' }, { status: 404 }); }

    return NextResponse.json({success: true, data: article}, {status: 200}
);
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}