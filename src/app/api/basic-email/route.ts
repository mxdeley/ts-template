import { client } from "../../../../postmark";

export async function POST(request: Request) {
  const res = await request.json();
  const { subject, body } = res;

  client.sendEmail({
    From: "daniel@madeleydesignstudio.org",
    To: "daniel@madeleydesignstudio.org",
    Subject: subject,
    TextBody: body,
  });

  return Response.json({ res });
}
