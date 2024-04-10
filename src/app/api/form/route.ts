import { NextResponse } from 'next/server'

import { IFormData } from '@/types/formData'

let forms: IFormData[] = []

export async function POST(req: Request) {
    const body = await req.json()

    forms.push(body)

    console.log(body)
    
    return NextResponse.json({ message: 'POST request', data: forms })
}