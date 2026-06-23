import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, date, timeSlot, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Appointment Request Received",
      html: `
        <h2>Thank you for contacting us</h2>
        <p>We have received your appointment request for ${timeSlot}.</p>
        <p>Our team will contact you shortly.</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "You got a New Booking",
      html: `
        <div style="font-family: Arial, sans-serif">
          <h2>New Appointment Request</h2>
          <p><strong>Scheduled Date:</strong> ${new Date(date).toDateString()}</p>
          <p><strong>Scheduled Time Slot:</strong> ${timeSlot}</p>
        <hr />
          <h3>Client Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${message || "No message provided"}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Appointment request sent successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send appointment request",
      },
      {
        status: 500,
      },
    );
  }
}
