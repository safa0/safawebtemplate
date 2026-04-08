"use server";

import { Resend } from "resend";

type ActionResult = { success: true } | { success: false; error: string };

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function submitApplication(
  formData: FormData
): Promise<ActionResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.APPLICATION_EMAIL_TO;
  const emailFrom =
    process.env.APPLICATION_EMAIL_FROM ??
    "Gradient Fellows <onboarding@resend.dev>";

  if (!apiKey || !emailTo) {
    return {
      success: false,
      error:
        "Server configuration error. Please contact us directly via email.",
    };
  }

  // Extract text fields
  const fullName = formData.get("fullName") as string | null;
  const email = formData.get("email") as string | null;
  const country = formData.get("country") as string | null;
  const degree = formData.get("degree") as string | null;
  const university = formData.get("university") as string | null;
  const graduationYear = formData.get("graduationYear") as string | null;
  const whyAI = formData.get("whyAI") as string | null;
  const whatBuild = formData.get("whatBuild") as string | null;
  const startDate = formData.get("startDate") as string | null;
  const hoursConfirm = formData.get("hoursConfirm") as string | null;
  const englishLevel = formData.get("englishLevel") as string | null;

  // Validate required text fields
  if (!fullName || !email || !country || !degree || !university || !graduationYear) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!whyAI || !whatBuild) {
    return { success: false, error: "Please complete all essay questions." };
  }

  if (!startDate || !hoursConfirm || !englishLevel) {
    return { success: false, error: "Please complete availability details." };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  // Extract and validate file fields
  const transcript = formData.get("transcript");
  const cv = formData.get("cv");

  if (!transcript || !(transcript instanceof File) || transcript.size === 0) {
    return {
      success: false,
      error: "Academic transcript is required.",
    };
  }

  if (transcript.size > MAX_FILE_SIZE) {
    return {
      success: false,
      error: "Transcript file must be under 5MB.",
    };
  }

  // Convert files to buffers for Resend attachments
  const transcriptBuffer = Buffer.from(await transcript.arrayBuffer());

  const attachments: Array<{
    filename: string;
    content: Buffer;
  }> = [{ filename: transcript.name, content: transcriptBuffer }];

  if (cv instanceof File && cv.size > 0) {
    if (cv.size > MAX_FILE_SIZE) {
      return { success: false, error: "CV file must be under 5MB." };
    }
    const cvBuffer = Buffer.from(await cv.arrayBuffer());
    attachments.push({ filename: cv.name, content: cvBuffer });
  }

  // Build email body
  const htmlBody = buildEmailHtml({
    fullName,
    email,
    country,
    degree,
    university,
    graduationYear,
    whyAI,
    whatBuild,
    startDate,
    hoursConfirm,
    englishLevel,
    hasCV: cv instanceof File && cv.size > 0,
  });

  const textBody = buildEmailText({
    fullName,
    email,
    country,
    degree,
    university,
    graduationYear,
    whyAI,
    whatBuild,
    startDate,
    hoursConfirm,
    englishLevel,
    hasCV: cv instanceof File && cv.size > 0,
  });

  // Send via Resend
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      replyTo: email,
      subject: `New Fellowship Application: ${fullName}`,
      html: htmlBody,
      text: textBody,
      attachments,
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        success: false,
        error: "Failed to send application. Please try again.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Application submission error:", err);
    return {
      success: false,
      error:
        "Something went wrong. Please try again or email us directly.",
    };
  }
}

// --- Email templates ---

interface EmailFields {
  fullName: string;
  email: string;
  country: string;
  degree: string;
  university: string;
  graduationYear: string;
  whyAI: string;
  whatBuild: string;
  startDate: string;
  hoursConfirm: string;
  englishLevel: string;
  hasCV: boolean;
}

function buildEmailHtml(fields: EmailFields): string {
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #3E3426;">
  <h1 style="font-size: 22px; border-bottom: 2px solid #A89968; padding-bottom: 12px;">
    New Fellowship Application
  </h1>

  <h2 style="font-size: 16px; color: #A89968; margin-top: 24px;">Personal &amp; Academic</h2>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <tr><td style="padding: 6px 12px 6px 0; font-weight: 600; width: 140px;">Name</td><td style="padding: 6px 0;">${escape(fields.fullName)}</td></tr>
    <tr style="background: #f9f7f4;"><td style="padding: 6px 12px 6px 0; font-weight: 600;">Email</td><td style="padding: 6px 0;"><a href="mailto:${escape(fields.email)}">${escape(fields.email)}</a></td></tr>
    <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Country</td><td style="padding: 6px 0;">${escape(fields.country)}</td></tr>
    <tr style="background: #f9f7f4;"><td style="padding: 6px 12px 6px 0; font-weight: 600;">Degree</td><td style="padding: 6px 0;">${escape(fields.degree)}</td></tr>
    <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">University</td><td style="padding: 6px 0;">${escape(fields.university)}</td></tr>
    <tr style="background: #f9f7f4;"><td style="padding: 6px 12px 6px 0; font-weight: 600;">Graduation</td><td style="padding: 6px 0;">${escape(fields.graduationYear)}</td></tr>
  </table>

  <h2 style="font-size: 16px; color: #A89968; margin-top: 24px;">Why AI/ML?</h2>
  <div style="background: #f9f7f4; padding: 16px; border-left: 3px solid #A89968; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escape(fields.whyAI)}</div>

  <h2 style="font-size: 16px; color: #A89968; margin-top: 24px;">What Would You Build?</h2>
  <div style="background: #f9f7f4; padding: 16px; border-left: 3px solid #A89968; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escape(fields.whatBuild)}</div>

  <h2 style="font-size: 16px; color: #A89968; margin-top: 24px;">Availability</h2>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <tr><td style="padding: 6px 12px 6px 0; font-weight: 600; width: 140px;">Start Date</td><td style="padding: 6px 0;">${escape(fields.startDate)}</td></tr>
    <tr style="background: #f9f7f4;"><td style="padding: 6px 12px 6px 0; font-weight: 600;">50h/week</td><td style="padding: 6px 0;">${escape(fields.hoursConfirm)}</td></tr>
    <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">English</td><td style="padding: 6px 0;">${escape(fields.englishLevel)}</td></tr>
  </table>

  <h2 style="font-size: 16px; color: #A89968; margin-top: 24px;">Attachments</h2>
  <p style="font-size: 14px;">Transcript: attached${fields.hasCV ? " &bull; CV: attached" : ""}</p>

  <hr style="border: none; border-top: 1px solid #e0d8cc; margin-top: 24px;">
  <p style="font-size: 12px; color: #8B7355;">Submitted on ${new Date().toISOString().split("T")[0]}</p>
</body>
</html>`.trim();
}

function buildEmailText(fields: EmailFields): string {
  return `
NEW FELLOWSHIP APPLICATION
===========================

PERSONAL & ACADEMIC
Name: ${fields.fullName}
Email: ${fields.email}
Country: ${fields.country}
Degree: ${fields.degree}
University: ${fields.university}
Graduation: ${fields.graduationYear}

WHY AI/ML?
${fields.whyAI}

WHAT WOULD YOU BUILD?
${fields.whatBuild}

AVAILABILITY
Start Date: ${fields.startDate}
50h/week: ${fields.hoursConfirm}
English: ${fields.englishLevel}

ATTACHMENTS
Transcript: attached${fields.hasCV ? "\nCV: attached" : ""}

Submitted on ${new Date().toISOString().split("T")[0]}
`.trim();
}
