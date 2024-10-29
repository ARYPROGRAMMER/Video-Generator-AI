import axios from 'axios';
import { NextResponse } from 'next/server';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/configs/FireBaseConfig";

export async function POST(req) {
    try {

        const { prompt } = await req.json();
        
        if (!prompt) {
            return NextResponse.json(
                { error: 'Prompt is required' },
                { status: 400 }
            );
        }

        const response = await axios.post(
            'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large',
            {
                inputs: prompt,
                parameters: {
                    height: 1024,
                    width: 1024
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                responseType: 'arraybuffer'
            }
        );

        const timestamp = Date.now();
        const filename = `generated-images/${timestamp}-${prompt.slice(0, 30)}.png`;

        const storageRef = ref(storage, filename);
        
        const blob = new Blob([response.data], { type: 'image/png' });
        
        await uploadBytes(storageRef, blob);
        
        const downloadURL = await getDownloadURL(storageRef);
        
        return NextResponse.json(
            {
                result: downloadURL
            },
            {
                status: 200,
                headers: {
                    'Cache-Control': 'public, max-age=31536000',
                }
            }
        );

    } catch (error) {
        return NextResponse.json(
            { error: 'Error generating image' },
            { status: 500 }
        );
    }
}