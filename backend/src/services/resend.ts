import { Resend } from 'resend';
import 'dotenv/config';
import { C0001_SUBJECT, C0001_BODY } from '../resend/crm.js';

// cd /Users/luisfaria/Desktop/sEngineer/zproject/backend
// npx ts-node src/services/resend.ts

// Resend expects a string API key in the constructor
const resendApiKey = process.env.RESEND_API_KEY?.trim();
export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export type SendEmailResult = {
    data: any | null;
    error: any | null;
};

export async function SendTySubEmail({
    to,
    subject,
    body,
}: {
    to: string;
    subject: string;
    body: string;
}): Promise<SendEmailResult> {
    if (!resend) {
        console.warn('[resendMailer] RESEND_API_KEY not set. Skipping email send.');
        return { data: null, error: null };
    }

    const { data, error } = await resend.emails.send({
        from: 'ZeroDopamine <luis@zerodopamine.com>',
        to,
        subject,
        html: body,
    });

    if (error) {
        return { data: null, error };
    }

    return { data, error: null };
}

// Call the function - just for testing
SendTySubEmail({
    to: 'lfariaus@gmail.com',
    subject: C0001_SUBJECT,
    body: C0001_BODY,
});
