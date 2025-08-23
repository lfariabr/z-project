import {questionQueries} from './questions/queries.js'

const RESEND_API_URL = 'https://api.resend.com/emails'

async function sendEmailViaResend(params: { to: string; subject: string; html: string }): Promise<boolean> {
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

const resolvers = {
	Query: {
		health: () => 'ok',
		...questionQueries,
	},
	Mutation: {
		// MVP mutation: send motivational email immediately
		async sendQuote(_: unknown, args: { email: string; explicit: boolean }) {
			const { email, explicit } = args
			if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
				throw new Error('Invalid email')
			}
			const quoteText = explicit
				? "Stop negotiating with your weakness. Get up and do the work."
				: "Discipline is choosing what you want most over what you want now."
			const subject = explicit ? 'WAKE UP. TIME TO WORK.' : 'Time to get after it.'
			const html = `<div style="font-family:system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6;">
				<h2>${subject}</h2>
				<p>${quoteText}</p>
				<p style="color:#888">Zero Dopamine</p>
			</div>`
			const ok = await sendEmailViaResend({ to: email, subject, html })
			return !!ok
		},
	},
};

export default resolvers;