import type { NextApiRequest, NextApiResponse } from "next";
import Mailjet, { LibraryResponse, SendEmailV3_1 } from "node-mailjet";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(404);
  }
  const { email, subject, message } = JSON.parse(req.body);
  if (!email || !subject || !message) {
    return res.status(501);
  }

  const mailjet = new Mailjet({
    apiKey: process.env.MAILJET_API_KEY,
    apiSecret: process.env.MAILJET_SECRET_KEY,
  });

  const data: SendEmailV3_1.Body = {
    Messages: [
      {
        From: {
          Name: "Vivid.limited contact form",
          Email: process.env.SUPPORT_EMAIL || "",
        },
        ReplyTo: { Email: email },
        To: [
          {
            Email: process.env.SUPPORT_EMAIL || "",
          },
        ],
        Subject: `${email}: ${subject}`,
        TextPart: message,
      },
    ],
  };

  try {
    const result: LibraryResponse<SendEmailV3_1.Response> = await mailjet
      .post("send", { version: "v3.1" })
      .request(data);
    const { Status } = result.body.Messages[0];
    res.status(200).json({ status: Status });
  } catch (error) {
    console.log(error);
    res.status(503);
  }
}
