import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, data } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    let subject = "";
    let html = "";

    if (type === "contact") {
      subject = `New Contact Form Submission: ${data.subject || "General Inquiry"}`;
      html = `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
    } else if (type === "checkout") {
      subject = `New Order Received from ${data.shipping.firstName} ${data.shipping.lastName}`;
      const itemsHtml = data.items
        .map(
          (item: any) => `
        <tr>
          <td>${item.name} (${item.option})</td>
          <td>${item.qty}</td>
          <td>Rs.${item.priceNum.toLocaleString()}</td>
          <td>Rs.${(item.priceNum * item.qty).toLocaleString()}</td>
        </tr>
      `,
        )
        .join("");

      html = `
        <h2>New Order Details</h2>
        <h3>Shipping Information</h3>
        <p><strong>Name:</strong> ${data.shipping.firstName} ${data.shipping.lastName}</p>
        <p><strong>Email:</strong> ${data.shipping.email}</p>
        <p><strong>Phone:</strong> ${data.shipping.phone}</p>
        <p><strong>Address:</strong> ${data.shipping.address}, ${data.shipping.city}, ${data.shipping.postalCode}</p>
        
        <h3>Order Summary</h3>
        <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%;">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
          <tfoot>
            <tr>
              <th colspan="3" align="right">Total</th>
              <th>Rs.${data.totalPrice.toLocaleString()}</th>
            </tr>
          </tfoot>
        </table>
      `;
    } else if (type === "newsletter") {
      subject = "New Newsletter Subscription";
      html = `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${data.email}</p>
      `;
    }

    const mailOptions = {
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_TO_EMAIL,
      subject: subject,
      html: html,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email", error: error.message },
      { status: 500 },
    );
  }
}
