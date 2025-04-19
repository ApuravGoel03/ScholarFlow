import { NextRequest, NextResponse } from 'next/server';
import articles from '@/utils/articles.json'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { user_id, paper_id, action, comment } = body;

    console.log(user_id, paper_id, action, comment)
    if(action === 'COMMENTED'){
        return NextResponse.json({message: `You commented on the paper ${paper_id} successfully!`, success: true}, {status: 200})
    }
    if(action === 'CLICKED'){
        const data = articles.find((article) => paper_id === article._id);
        if (!data) { return NextResponse.json({ error: 'Article not found' }, { status: 404 }); }
        return NextResponse.json({
            "message": "User action 'CLICKED' logged successfully!",
            "article": data,
            "recommendations": [
              {
                "id": "53e997d7b7602d9701fcc542",
                "similarity": 0.9988019466400146,
                "details": {
                  "id": "53e997d7b7602d9701fcc542",
                  "title": "A robust evolutionary framework for multi-objective optimization"
                }
              },
              {
                "id": "53e997ccb7602d9701fbe585",
                "similarity": 0.997866153717041,
                "details": {
                  "id": "53e997ccb7602d9701fbe585",
                  "title": "A Realistic Chat Environment for Virtual Avatars in Cyber Space"
                }
              },
              {
                "id": "53e997ddb7602d9701fd331a",
                "similarity": 0.9977683424949646,
                "details": {
                  "id": "53e997ddb7602d9701fd331a",
                  "title": "UML-Based Statistical Test Case Generation"
                }
              },
              {
                "id": "53e997e4b7602d9701fdb1f9",
                "similarity": 0.997541069984436,
                "details": {
                  "id": "53e997e4b7602d9701fdb1f9",
                  "title": "A note on the Boolean quadric polytope"
                }
              },
              {
                "id": "53e997ccb7602d9701fbf036",
                "similarity": 0.9971491694450378,
                "details": {
                  "id": "53e997ccb7602d9701fbf036",
                  "title": "Model Reduction and Clusterization of Large-Scale Bidirectional Networks."
                }
              }
            ]
          }
          )
    }

    return NextResponse.json({message: `You ${action.toLowerCase()}d the paper ${paper_id} successfully!`, success: true}, {status: 200}
);
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}