import { SendEmailResult } from '../../../../backend/src/services/resend';
import { SEND_WELCOME_EMAIL_MUTATION } from './sendWelcomeEmail';

export async function SendTySubEmail({
    to,
    subject,
    body,
}: {
    to: string;
    subject: string;
    body: string;
}): Promise<SendEmailResult> {
    if (!process.env.RESEND_API_KEY) {
        console.warn('[resendMailer] RESEND_API_KEY not set. Skipping email send.');
        return { data: null, error: null };
    }

    const response = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: SEND_WELCOME_EMAIL_MUTATION,
            variables: {
                input: {
                    to,
                    subject,
                    body,
                },
            },
        }),
    });

    const { data, error } = await response.json();

    if (error) {
        return { data: null, error };
    }

    return { data, error: null };
}