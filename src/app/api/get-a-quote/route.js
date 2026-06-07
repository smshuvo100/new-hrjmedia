// src/app/api/get-a-quote/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());
    const file = formData.get("files");

    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // বা আপনার SMTP সার্ভার
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@hrjmedia.com", // আপনার মেইল যেখানে কোট যাবে
      subject: `New Quote Request from ${data.firstName} ${data.lastName}`,
      text: `
                Company: ${data.companyName}
                Product: ${data.product}
                Quantity: ${data.quantity}
                Address: ${data.address}, ${data.city}, ${data.postalCode}
                Phone: ${data.phone}
                Description: ${data.extraInfo}
            `,
      // ফাইল অ্যাটাচমেন্ট যদি থাকে
      attachments: file
        ? [
            {
              filename: file.name,
              content: Buffer.from(await file.arrayBuffer()),
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
