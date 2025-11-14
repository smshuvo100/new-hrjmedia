import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    // full form data received from frontend
    const { product, delivery, upload, userDetails } = body;

    // Setup transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email template
    const html = `
      <h2>📄 New Quote Request</h2>

      <h3>🟦 Product Details</h3>
      <pre>${JSON.stringify(product, null, 2)}</pre>

      <h3>🚚 Delivery Details</h3>
      <pre>${JSON.stringify(delivery, null, 2)}</pre>

      <h3>📎 Upload Info</h3>
      <pre>${JSON.stringify(upload, null, 2)}</pre>

      <h3>👤 Customer Info</h3>
      <pre>${JSON.stringify(userDetails, null, 2)}</pre>

      <br/>
      <p>— Get a Quote Form (Your Website)</p>
    `;

    await transporter.sendMail({
      from: `"Quote Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Quote Request Submitted",
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
