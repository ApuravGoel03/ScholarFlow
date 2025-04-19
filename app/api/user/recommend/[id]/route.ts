import { NextResponse } from 'next/server';
import {getUser} from '@/components/utils/getUser';


export async function GET() {
    const user_id = await getUser();
    const guest_id = user_id?.guestId;
  try {
    return NextResponse.json({
        "user_id": guest_id,
        "recommendations": [
            {
                "_id": "9f144b41-a6a6-43b7-9558-f5a598fc8b18",
                "abstract": "This study introduces a novel semantic graph-based framework for enhanced language understanding. By constructing a dynamic linguistic graph that models dependencies between syntactic and semantic units, our method outperforms traditional parsing techniques in complex sentence interpretation. We conduct experiments across three benchmark NLP datasets, showing significant improvements in tasks including named entity recognition and semantic role labeling. The results demonstrate the robustness of our approach in capturing long-range dependencies and contextual cues.",
                "authors": [
                  {
                    "_id": "auth1",
                    "name": "Alice Smith",
                    "org": "MIT",
                    "orgid": "org1"
                  },
                  {
                    "_id": "auth5",
                    "name": "Eva Green",
                    "org": "Cambridge University",
                    "orgid": "org5"
                  },
                  {
                    "_id": "auth3",
                    "name": "Charlie Lee",
                    "org": "Harvard University",
                    "orgid": "org3"
                  }
                ],
                "doi": "10.1000/5a828769",
                "fos": [
                  "machine learning",
                  "natural language processing"
                ],
                "keywords": [
                  "transformers",
                  "bert",
                  "nlp"
                ],
                "lang": "en",
                "n_citation": 61,
                "references": [
                  "3a4edc43-9325-45af-8bf1-3d18cac12c0b",
                  "bde40b3b-cfa8-44fa-b22f-da6e53b3f3bd",
                  "92b0094a-65c9-49bf-ae8d-7754c5369eed",
                  "f3bcc469-2707-4365-8daa-87b0c23c78f3",
                  "b8f1ac7c-93e3-469a-b564-2ba005967ec4",
                  "6a08a15a-cba5-4969-9990-fc6e9bf23c55",
                  "11bdb305-9473-439f-a524-2a6c24ab6891",
                  "114c72a9-a7a6-490d-aab8-07fb095f8779",
                  "04c2f99b-f164-4703-a2b6-01750cdc841a",
                  "a351d18c-12c6-4517-803a-6a19d6d06c89",
                  "8befa67f-baea-46e7-8ee3-f983035bb11c",
                  "5dd378ee-0f4b-43a6-91e4-f3e663e36e3b",
                  "987aca59-02bc-4c1b-8aa4-9ef8d1139a1d",
                  "6e6f6f5f-5d2b-4703-b099-0e1ea1722f46"
                ],
                "title": "Semantic Graph Modeling for Enhanced Language Understanding",
                "venue": {
                  "_id": "555037cf7cea80f95419b101",
                  "name": "ACL",
                  "raw": "ACL"
                },
                "year": 2018,
                "es_score": 0.885,
                "qdrant_score": 1.0,
                "combined_score": 0.404,
                "query_similarity": 1.0,
                "final_score": 0.801
              },
              {
                "_id": "24b8ea14-3dd6-46e9-9bc4-92b8524f84de",
                "abstract": "We propose a new method for multilingual translation by integrating transformer-based large language models (LLMs) into standard translation pipelines. Our system leverages language-specific adapters and attention refinements to ensure consistency and fluency across diverse language pairs. Evaluations on the WMT and IWSLT datasets reveal that our method significantly outperforms existing baselines, especially in low-resource language settings. The paper also provides a comparative error analysis and discusses implications for future multilingual systems.",
                "authors": [
                  {
                    "_id": "auth5",
                    "name": "Eva Green",
                    "org": "Cambridge University",
                    "orgid": "org5"
                  },
                  {
                    "_id": "auth2",
                    "name": "Bob Jones",
                    "org": "Stanford University",
                    "orgid": "org2"
                  },
                  {
                    "_id": "auth1",
                    "name": "Alice Smith",
                    "org": "MIT",
                    "orgid": "org1"
                  }
                ],
                "doi": "10.1000/2de6c994",
                "fos": [
                  "deep learning",
                  "computer vision"
                ],
                "keywords": [
                  "translation",
                  "language models",
                  "multilingual"
                ],
                "lang": "en",
                "n_citation": 13,
                "references": [
                  "945baa13-90e1-46e3-a623-3913ccead911",
                  "5cb6f98c-8e1e-454e-b7eb-602fd4d37605",
                  "d4115c0c-f307-4031-a92d-ff1871393d9c",
                  "19f62e39-15dd-4df7-ab0b-c248a1c4d534",
                  "d9b64660-b878-433e-ab69-8464d7071088",
                  "c95766ff-f50e-441a-929c-32b17faa86ba",
                  "9d7c583d-8b42-4d05-9428-f0a21a1da6eb",
                  "61c14c72-414c-4994-a7c1-1cc00aa46c8c"
                ],
                "title": "Multilingual Translation with Enhanced LLM Integration",
                "venue": {
                  "_id": "555037cf7cea80f95419b102",
                  "name": "EMNLP",
                  "raw": "EMNLP"
                },
                "year": 2019,
                "es_score": 0.537,
                "qdrant_score": 1.0,
                "combined_score": 0.697,
                "query_similarity": 1.0,
                "final_score": 0.899
              },
              {
                "_id": "0c6bbeb9-60c4-4545-aaf0-6d2e16e7cec2",
                "abstract": "This paper presents a deep reinforcement learning (DRL) model for simulating financial market dynamics. We design a multi-agent trading environment where each agent learns distinct trading strategies under varied risk preferences. The DRL model incorporates stochastic volatility, reward shaping, and market feedback to simulate real-world trading scenarios. Experimental results highlight the model\u2019s capability to generalize across different market conditions and achieve profitable performance compared to rule-based strategies.",
                "authors": [
                  {
                    "_id": "auth4",
                    "name": "Dana White",
                    "org": "Oxford University",
                    "orgid": "org4"
                  },
                  {
                    "_id": "auth1",
                    "name": "Alice Smith",
                    "org": "MIT",
                    "orgid": "org1"
                  },
                  {
                    "_id": "auth5",
                    "name": "Eva Green",
                    "org": "Cambridge University",
                    "orgid": "org5"
                  }
                ],
                "doi": "10.1000/9b978382",
                "fos": [
                  "reinforcement learning",
                  "economics"
                ],
                "keywords": [
                  "stock prediction",
                  "q-learning",
                  "markets"
                ],
                "lang": "en",
                "n_citation": 74,
                "references": [
                  "7efe6b6e-ac24-4d4f-b2dc-a20add67ffda",
                  "946545e2-c1d5-4dd5-8217-6f83f28232c6",
                  "08e1e9fc-2e19-4526-9032-ddb71b8742dd",
                  "14f9b491-1975-4bf3-83a2-b3ce7fd4df12",
                  "3d771b9e-533e-4e79-9796-0d4dca9523f6",
                  "99d3458a-4896-4dc7-bed8-1c18fe4afc7b",
                  "dcba351c-698e-4235-8c18-33df78a47c9e",
                  "88b0db1b-0549-4247-8961-9cf14d24ab2d",
                  "c36c334a-866b-4a63-919b-cb791d0903aa",
                  "e8bbf5c4-c675-4a77-b676-31ca8987a79a"
                ],
                "title": "Deep RL Applications in Financial Markets",
                "venue": {
                  "_id": "555037cf7cea80f95419b103",
                  "name": "NAACL",
                  "raw": "NAACL"
                },
                "year": 2017,
                "es_score": 0.629,
                "qdrant_score": 1.0,
                "combined_score": 0.632,
                "query_similarity": 1.0,
                "final_score": 0.877
              },
              {
                "_id": "40b4424a-e1bf-4a29-bcc6-069bdb74bf70",
                "abstract": "We introduce a hybrid approach for topic modeling that combines neural word embeddings with density-based clustering. Our method captures nuanced semantic relationships by embedding terms into a low-dimensional space before performing topic extraction. We validate the coherence and relevance of generated topics through both automatic metrics and human evaluation on news and scientific corpora. The model proves especially effective in dealing with short and noisy texts such as social media posts.",
                "authors": [
                  {
                    "_id": "auth3",
                    "name": "Charlie Lee",
                    "org": "Harvard University",
                    "orgid": "org3"
                  },
                  {
                    "_id": "auth2",
                    "name": "Bob Jones",
                    "org": "Stanford University",
                    "orgid": "org2"
                  },
                  {
                    "_id": "auth5",
                    "name": "Eva Green",
                    "org": "Cambridge University",
                    "orgid": "org5"
                  }
                ],
                "doi": "10.1000/8c99ab66",
                "fos": [
                  "artificial intelligence",
                  "linguistics"
                ],
                "keywords": [
                  "lda",
                  "word2vec",
                  "embedding"
                ],
                "lang": "en",
                "n_citation": 36,
                "references": [
                  "ff9031c9-ad2a-43bb-acf4-a88118c802c7",
                  "a4342fb2-1c95-425a-ac52-77627d4f31f7",
                  "51a236dc-bf85-405f-acf2-21e162df16e1",
                  "a6554f10-55db-4534-8436-d8d8241b69e3",
                  "7579ec9e-0c02-469f-9341-ebf96f3900f5",
                  "7da49b2f-85a2-4272-9d6b-18829a7259e5",
                  "93ed06fa-53c9-4fcd-9047-1a1c2960f7df",
                  "21eb8039-c9bb-4e6e-bf35-35c2f806cb3f",
                  "d9ba721a-c64b-465d-ab23-2879b215bdf6",
                  "c71a4242-d8f2-4c69-9f16-5ecf99054bee",
                  "76893e8d-5c9f-47b0-b608-01178c885b9a",
                  "897e6a88-ac86-4acc-b5fb-49f62ff3f3a9"
                ],
                "title": "Topic Modeling via Neural Embedding and Clustering",
                "venue": {
                  "_id": "555037cf7cea80f95419b104",
                  "name": "ICLR",
                  "raw": "ICLR"
                },
                "year": 2019,
                "es_score": 0.15,
                "qdrant_score": 1.0,
                "combined_score": 0.85,
                "query_similarity": 1.0,
                "final_score": 0.95
              },
              {
                "_id": "6d50bf71-5afc-46d5-870f-697265f71bff",
                "abstract": "This work addresses cross-lingual named entity recognition (NER) in zero-resource settings using multilingual transformers. Our architecture leverages shared embedding spaces and a label projection mechanism, allowing the model to generalize across languages without additional annotation. We evaluate on several benchmark datasets including WikiAnn and CoNLL, achieving state-of-the-art performance in zero-shot configurations. The model\u2019s ability to adapt rapidly to new languages underscores its practical utility in multilingual environments.",
                "authors": [
                  {
                    "_id": "auth3",
                    "name": "Charlie Lee",
                    "org": "Harvard University",
                    "orgid": "org3"
                  },
                  {
                    "_id": "auth4",
                    "name": "Dana White",
                    "org": "Oxford University",
                    "orgid": "org4"
                  },
                  {
                    "_id": "auth2",
                    "name": "Bob Jones",
                    "org": "Stanford University",
                    "orgid": "org2"
                  }
                ],
                "doi": "10.1000/e51d782a",
                "fos": [
                  "text mining",
                  "information retrieval"
                ],
                "keywords": [
                  "ner",
                  "zero-shot",
                  "transfer learning"
                ],
                "lang": "en",
                "n_citation": 60,
                "references": [
                  "3329cadd-5e81-4bbc-8d48-a6845b1180b8",
                  "afe079f4-2825-4e07-a159-63afbf360440",
                  "c4000913-eaf3-4b38-b5c1-a8ae73903ba2",
                  "f446d53a-bcd8-4202-bbeb-73e413038455",
                  "abfd5cab-ba62-4fcb-8d12-04fdbd276b67",
                  "2837acc5-872b-4d5d-bee4-652f1ca8fa94",
                  "59ee4bcd-5a5c-492a-a838-588cce33e794",
                  "a8ff20e2-4ac0-4b6e-8f55-0bd69bf35401",
                  "bb34f5d0-c1d5-4ce2-a68a-4428b4f0ca91",
                  "0d442231-6297-4c12-ba97-52d4d1d2c9c8",
                  "fd8fc25b-2c12-4b67-9dfe-8224d8a5945d",
                  "1e6de0fa-e991-4577-ae1d-19b7ad6cb184"
                ],
                "title": "Zero-Shot Cross-Lingual NER Using Transformers",
                "venue": {
                  "_id": "555037cf7cea80f95419b105",
                  "name": "NeurIPS",
                  "raw": "NeurIPS"
                },
                "year": 2021,
                "es_score": 0.255,
                "qdrant_score": 1.0,
                "combined_score": 0.639,
                "query_similarity": 1.0,
                "final_score": 0.88
              }]}
      
);
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}