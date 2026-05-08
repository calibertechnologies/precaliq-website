import { NextResponse } from 'next/server';

const CALIMATIC_API_URL = 'https://api.calimatic.app/api/v1/emails/send';
const CALIMATIC_API_KEY = process.env.CALIMATIC_API_KEY || '';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@precaliq.com';
const FROM_NAME = process.env.FROM_NAME || 'PreCal-IQ';
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'hello@precaliq.com';

interface ContactBody {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  message?: string;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const company = (body.company ?? '').trim();
  const role = (body.role ?? '').trim();
  const message = (body.message ?? '').trim();

  if (!name || !email || !company) {
    return NextResponse.json({ error: 'Name, email, and company are required' }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
  }
  if (name.length > 200 || company.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: 'Submission is too long' }, { status: 400 });
  }

  if (!CALIMATIC_API_KEY) {
    console.error('[Contact] CALIMATIC_API_KEY is not set; cannot deliver demo request from', email);
    return NextResponse.json({ error: 'Email delivery is not configured' }, { status: 500 });
  }

  const subjectName = escapeHtml(name);
  const html = `
    <h2>New demo request</h2>
    <table style="border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>
      ${role ? `<tr><td style="padding:4px 12px 4px 0"><strong>Role</strong></td><td>${escapeHtml(role)}</td></tr>` : ''}
    </table>
    ${message ? `<h3 style="margin-top:24px">Message</h3><p style="white-space:pre-wrap">${escapeHtml(message)}</p>` : ''}
    <hr style="border:none;border-top:1px solid #eee;margin-top:32px"/>
    <p style="color:#888;font-size:12px">Submitted from precaliq.com/contact</p>
  `;

  try {
    const res = await fetch(CALIMATIC_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': CALIMATIC_API_KEY,
      },
      body: JSON.stringify({
        from: { email: FROM_EMAIL, name: FROM_NAME },
        to: [{ email: TO_EMAIL }],
        replyTo: { email, name },
        subject: `Demo request: ${subjectName} (${company})`,
        bodyHtml: html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('[Contact] Calimatic API error', res.status, detail);
      return NextResponse.json({ error: 'Failed to send. Please try again or email hello@precaliq.com.' }, { status: 502 });
    }
  } catch (err) {
    console.error('[Contact] Network error', err);
    return NextResponse.json({ error: 'Failed to send. Please try again or email hello@precaliq.com.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
