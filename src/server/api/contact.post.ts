import nodemailer from "nodemailer"
import type { H3Event } from "h3"

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event)
  const { name, email, company, subject, message } = body as Record<
    string,
    string
  >

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: "dqyqlqaqn@gmail.com",
    subject: subject ? `[Portfolio] ${subject}` : "[Portfolio] New Contact",
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
  })

  return { success: true }
})
