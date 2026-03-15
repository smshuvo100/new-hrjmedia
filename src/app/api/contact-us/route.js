import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const companyName = formData.get("companyName") || "";
    const subject = formData.get("subject") || "";
    const firstName = formData.get("firstName") || "";
    const lastName = formData.get("lastName") || "";
    const phone = formData.get("phone") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";
    const artwork = formData.get("artwork");

    if (!subject || !firstName || !phone || !email || !message) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments = [];

    if (artwork && typeof artwork === "object" && artwork.size > 0) {
      const bytes = await artwork.arrayBuffer();
      attachments.push({
        filename: artwork.name,
        content: Buffer.from(bytes),
      });
    }

    await transporter.sendMail({
      from: `"HRJ Media Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
Company Name: ${companyName}
First Name: ${firstName}
Last Name: ${lastName}
Phone: ${phone}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Company Name:</strong> ${companyName || "-"}</p>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName || "-"}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
      attachments,
    });

    return Response.json(
      { message: "Message sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
}
