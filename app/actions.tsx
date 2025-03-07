"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendEmail(data: EmailData) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing Resend API key");
  }

  if (!process.env.TO_EMAIL) {
    throw new Error("Missing recipient email address");
  }

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.TO_EMAIL],
      subject: `Contact Form: ${data.subject}`,
      replyTo: data.email,
      text: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
