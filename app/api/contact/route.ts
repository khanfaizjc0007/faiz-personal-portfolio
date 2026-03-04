import { NextResponse } from "next/server";
import { client} from "@/sanity/lib/client";

interface ContactBody {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactBody = await req.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    await client.create({
      _type: "contactMessage",
      name,
      email,
      subject: subject ?? "",
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}