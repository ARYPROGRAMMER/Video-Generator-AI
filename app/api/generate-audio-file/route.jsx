import { ElevenLabsClient } from "elevenlabs";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import { mkdir } from "fs/promises";

export async function POST(req) {
    try {

        const { text, id } = await req.json();
        
        if (!text || !id) {
            return NextResponse.json(
                { error: "Missing required fields: text and id" },
                { status: 400 }
            );
        }
        const apiKey = process.env.NEXT_PUBLIC_ELEVEN_LABS_API_KEY;
        if (!apiKey) {
            throw new Error("ElevenLabs API key is not configured");
        }
        const elevenlabs = new ElevenLabsClient({
            apiKey: apiKey,
        });

        const audioResponse = await elevenlabs.generate({
         
            voice: "Jessica" ,
            text: text,
            modelId: "eleven_multilingual_v2",
            outputFormat: "mp3",
        });

        const audioDir = path.join(process.cwd());
        await mkdir(audioDir, { recursive: true });

        const filePath = path.join(audioDir, `output.mp3`);
        await writeFile(filePath, audioResponse);

        return NextResponse.json(
            { 
                Result: 'Success'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error details:', {
            message: error.message,
            statusCode: error.statusCode,
            body: error.body
        });

        let errorMessage = "Failed to generate audio";
        if (error.statusCode === 403) {
            errorMessage = "Authentication failed. Please check your ElevenLabs API key.";
        } else if (error.message.includes("API key")) {
            errorMessage = "ElevenLabs API key is missing or invalid";
        }

        return NextResponse.json(
            { error: errorMessage },
            { status: error.statusCode || 500 }
        );
    }
}