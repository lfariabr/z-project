const RESEND_API_URL = 'https://api.resend.com/emails'

export async function sendEmailViaResend(params: { to: string; subject: string; html: string }): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return false
  }
  try {
    const res = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Zero Dopamine <no-reply@zerodopamine.app>',
        to: [params.to],
        subject: params.subject,
        html: params.html,
      })
    })
    if (!res.ok) {
      const text = await res.text()
      console.error('Resend API error', res.status, text)
      return false
    }
    return true
  } catch (err) {
    console.error('Failed to send email via Resend', err)
    return false
  }
}
