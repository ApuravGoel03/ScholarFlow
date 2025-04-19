import { NextResponse } from 'next/server';


export async function GET() {
  try {
    return NextResponse.json([
        {
          "paper_id": "8dc59e66-e24b-4823-a520-44c35320728e",
          "title": "Deep RL Applications in Financial Markets",
          "trending_score": 0.964
        },
        {
          "paper_id": "3eb75918-81de-4f7d-a851-34d3a8d5570f",
          "title": "Multilingual Translation with Enhanced LLM Integration",
          "trending_score": 0.93
        },
        {
          "paper_id": "d15e3f17-ad9d-412d-bd50-617fdc602591",
          "title": "Topic Modeling via Neural Embedding and Clustering",
          "trending_score": 0.909
        },
        {
          "paper_id": "9047e31d-84f1-4231-a00e-aea2cb0f2c67",
          "title": "Semantic Graph Modeling for Enhanced Language Understanding",
          "trending_score": 0.813
        },]
);
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}