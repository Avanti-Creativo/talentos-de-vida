import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { talentProfiles } from "@/data/quiz-results";
import { TalentType } from "@/lib/quiz-logic";

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFICATION_EMAIL = process.env.QUIZ_NOTIFICATION_EMAIL || "datalentosdevida@gmail.com";
const EMAIL_FROM = process.env.EMAIL_FROM || "Talentos de Vida <quiz@talentosdevida.com>";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://talentosdevida.com";

interface QuizSubmitPayload {
  firstName: string;
  email: string;
  quizAnswers: Record<string, string>;
  resultTalent: TalentType;
  talentName: string;
}

// Email de resultados para la usuaria
function buildResultsEmail(data: QuizSubmitPayload): string {
  const profile = talentProfiles[data.resultTalent];
  if (!profile) {
    return `<p>Gracias por completar nuestro quiz, ${data.firstName}! Tu talento: ${data.resultTalent}.</p>`;
  }

  const resultsUrl = `${SITE_URL}/quiz/results/${data.resultTalent}`;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#F9F8FB;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9F8FB;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background-color:#3891A2;padding:40px 40px 30px;text-align:center;">
              <p style="color:#F9BA58;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;">
                Tu Talento Revelado
              </p>
              <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px;font-weight:normal;">
                ${data.firstName}, Eres
              </h1>
              <h2 style="color:#F9BA58;font-size:32px;margin:0 0 8px;font-style:italic;font-weight:normal;">
                ${profile.name}
              </h2>
              <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:0;">
                ${profile.tagline}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:30px 40px 10px;text-align:center;">
              <p style="color:#374151;font-size:18px;font-style:italic;margin:0;">
                "${profile.headline}"
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 40px 10px;">
              <h3 style="color:#3891A2;font-size:16px;margin:0 0 8px;">Tu Identidad Perdida:</h3>
              <p style="color:#6B7280;font-size:15px;line-height:1.7;margin:0 0 14px;">
                ${profile.identityLost}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 40px 10px;">
              <h3 style="color:#F9BA58;font-size:16px;margin:0 0 8px;">Por Qué Es Oro:</h3>
              <p style="color:#6B7280;font-size:15px;line-height:1.7;margin:0 0 14px;">
                ${profile.whyGold}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 40px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FDF6E3;border-radius:12px;">
                <tr>
                  <td style="padding:24px;">
                    <h3 style="color:#374151;font-size:16px;margin:0 0 16px;">Ejemplos de Tu Poder:</h3>
                    ${profile.examples
                      .map((ex) => `<p style="margin:0 0 8px;color:#6B7280;font-size:14px;">✓ ${ex}</p>`)
                      .join("")}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 40px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#3891A2;border-radius:12px;">
                <tr>
                  <td style="padding:24px;text-align:center;">
                    <p style="color:rgba(255,255,255,0.7);font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 12px;">Mensaje de Daysi</p>
                    <p style="color:#ffffff;font-size:16px;font-style:italic;line-height:1.7;margin:0;">
                      "${profile.daysisMessage}"
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 40px 20px;text-align:center;">
              <a href="${resultsUrl}"
                 style="display:inline-block;background-color:#F9BA58;color:#374151;text-decoration:none;padding:14px 32px;border-radius:30px;font-size:15px;font-weight:bold;letter-spacing:0.5px;">
                Ver Mis Resultados Completos
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 40px 30px;text-align:center;">
              <p style="color:#6B7280;font-size:14px;margin:0 0 12px;">
                ¿Lista para transformar tu talento en libertad?
              </p>
              <a href="${SITE_URL}/contacto" style="color:#3891A2;font-size:14px;text-decoration:underline;">
                Hablar con Daysi
              </a>
            </td>
          </tr>
          <tr>
            <td style="background-color:#F9F8FB;padding:24px 40px;text-align:center;border-top:1px solid #E5E7EB;">
              <p style="color:#9CA3AF;font-size:12px;margin:0 0 4px;">Talentos de Vida &bull; Daysi Aldaz</p>
              <p style="color:#9CA3AF;font-size:12px;margin:0;">Recibiste este email porque completaste nuestro Quiz de Talentos.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

// Notificación interna para Daysi
function buildNotificationEmail(data: QuizSubmitPayload): string {
  const profile = talentProfiles[data.resultTalent];
  const answersRows = Object.entries(data.quizAnswers)
    .map(
      ([q, a]) =>
        `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:bold;">${q}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${a}</td></tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:24px;">
  <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;margin:0 auto;overflow:hidden;">
    <tr>
      <td style="background:#3891A2;padding:24px;color:#fff;">
        <h2 style="margin:0;">Nuevo lead del Quiz de Talentos</h2>
      </td>
    </tr>
    <tr>
      <td style="padding:24px;">
        <p style="margin:0 0 8px;"><strong>Nombre:</strong> ${data.firstName}</p>
        <p style="margin:0 0 8px;"><strong>Email:</strong> ${data.email}</p>
        <p style="margin:0 0 8px;"><strong>Resultado:</strong> ${profile?.name || data.resultTalent} (${data.resultTalent})</p>
        <h3 style="margin:24px 0 8px;">Respuestas del quiz:</h3>
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
          ${answersRows}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { success: false, message: "Email service not configured" },
        { status: 500 }
      );
    }

    const data: QuizSubmitPayload = await request.json();

    if (!data.email || !data.firstName || !data.resultTalent) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const profile = talentProfiles[data.resultTalent];

    // 1. Notificación interna a Daysi
    const notification = await resend.emails.send({
      from: EMAIL_FROM,
      to: NOTIFICATION_EMAIL,
      replyTo: data.email,
      subject: `Nuevo lead del quiz: ${data.firstName} — ${profile?.name || data.resultTalent}`,
      html: buildNotificationEmail(data),
    });

    // 2. Email de resultados a la usuaria
    const userEmail = await resend.emails.send({
      from: EMAIL_FROM,
      to: data.email,
      subject: `${data.firstName}, tu talento es: ${profile?.name || data.resultTalent}`,
      html: buildResultsEmail(data),
    });

    if (notification.error || userEmail.error) {
      console.error("Resend errors:", notification.error, userEmail.error);
      return NextResponse.json(
        {
          success: false,
          message: "Email send failed",
          notificationError: notification.error,
          userEmailError: userEmail.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Quiz submitted and emails sent",
    });
  } catch (error) {
    console.error("Quiz submission error:", error);
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Failed to submit quiz" },
      { status: 500 }
    );
  }
}
