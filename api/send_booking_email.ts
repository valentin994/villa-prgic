const BOOKING_NOTIFICATION_EMAIL = "valentin.vareskic@gmail.com";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const {
    name,
    email,
    phone,
    address,
    guests,
    message,
    apartmentName,
    startDate,
    endDate,
    nights,
    totalPrice,
  } = req.body ?? {};

  if (!name || !email) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    res.status(500).json({ error: "Email service is not configured" });
    return;
  }

  const html = `
    <h2>New booking request${apartmentName ? ` – ${apartmentName}` : ""}</h2>
    <p><strong>Check-in:</strong> ${startDate}</p>
    <p><strong>Check-out:</strong> ${endDate}</p>
    <p><strong>Nights:</strong> ${nights}</p>
    <p><strong>Total price:</strong> €${totalPrice}</p>
    <hr />
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "-"}</p>
    <p><strong>Address:</strong> ${address || "-"}</p>
    <p><strong>Guests:</strong> ${guests}</p>
    <p><strong>Message:</strong> ${message || "-"}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Villa Prgić <info@apartmani-prgic.hr>",
        to: [BOOKING_NOTIFICATION_EMAIL],
        reply_to: email,
        subject: `New booking request${apartmentName ? ` – ${apartmentName}` : ""}`,
        html,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Resend error:", response.status, errorBody);
      res.status(502).json({ error: "Failed to send email" });
      return;
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending booking email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
