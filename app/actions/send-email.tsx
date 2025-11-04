"use server"

interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate the data
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      }
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY is not configured")
      return {
        success: false,
        error: "Email service is not configured. Please contact the administrator.",
      }
    }

    // Send email using Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Asandan Group Website <onboarding@resend.dev>", // Update this with your verified domain
        to: process.env.CONTACT_EMAIL || "contact@asandangroup.com",
        reply_to: data.email,
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("[v0] Resend API error:", error)
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}
