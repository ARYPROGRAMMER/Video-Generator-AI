import { generateCompletion } from "@/configs/aimodel";
import { NextResponse } from "next/server";


export async function POST(req){

    try {
        const { prompt } = await req.json(); 
        const completion = await generateCompletion(prompt);
        return new NextResponse(completion.choices[0].message.content, { status: 200 });
      } catch (e) {

        return new NextResponse({"Internal Server Error":e}, { status: 500 });
      }
}