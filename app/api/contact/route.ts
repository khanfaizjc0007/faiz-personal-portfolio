import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    const emailContent = `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
      
      ---
      Reply to: ${email}
    `

    // Send email using fetch to a service like Resend
    // Note: You'll need to add RESEND_API_KEY to your environment variables
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: ["khanfaizjc0007@gmail.com"],
          subject: `New Contact Form: ${subject}`,
          text: emailContent,
          reply_to: email,
        }),
      })

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json()
        console.error("[v0] Resend API error:", errorData)
        throw new Error("Failed to send email")
      }

      console.log("[v0] Email sent successfully to khanfaizjc0007@gmail.com")
    } else {
      console.log("[v0] Contact form submission (no API key):", emailContent)
      console.warn("[v0] RESEND_API_KEY not found. Add it to environment variables to enable email sending.")
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again.",
      },
      { status: 500 },
    )
  }
}
