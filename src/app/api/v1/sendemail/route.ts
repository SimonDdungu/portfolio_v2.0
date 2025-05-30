import { NextResponse, NextRequest } from "next/server";
import UserEmail from "@/components/Contact/Email/UserEmail";
import { Resend } from "resend";




export async function POST(req: NextRequest){
    console.log("HITTING THIS API")
    console.log(process.env.EMAIL_KEY)
    
    const data = await req.json()
    
    const {first_name, last_name, email, message } = data;
    
    console.log('Received:', { first_name, last_name, email, message });
    
    try {
        const resend = new Resend(process.env.EMAIL_KEY)
        const sendEmail = await resend.emails.send({
            from: `dev.simonddungu@gmail.com`,
            to: email,
            subject: "Portfolio Inquries",
            react: UserEmail({firstName: first_name, lastName: last_name, email: email, message: message})
        })

        return NextResponse.json({success: true, data: sendEmail})
    } catch (error) {
        console.log("Failed: ", error)
        return NextResponse.json({success: false, error: error})
    }
}
