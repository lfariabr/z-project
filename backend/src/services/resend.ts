import { Resend } from 'resend';
import 'dotenv/config';

// cd /Users/luisfaria/Desktop/sEngineer/zproject/backend
// npx ts-node src/services/resend.ts

// Resend expects a string API key in the constructor
const resendApiKey = process.env.RESEND_API_KEY?.trim();
const resend = resendApiKey ? new Resend(resendApiKey) : null;

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

// Call the function
SendTySubEmail({
    to: 'slporfirio92@gmail.com',
    subject: "You're in. Welcome to Zero Dopamine Project!",
    body: `
    <div style="font-family: 'Courier New', monospace; background: #0a0a0a; color: #ffffff; padding: 20px; line-height: 1.6;">
        <h2 style="color: #ff0000; margin-bottom: 20px;">You're in.</h2>
        
        <p>No congratulations. No celebration.</p>
        
        <p>You just signed up for the hardest thing you'll do this week.</p>
        
        <p>Every week, you'll get one message. Raw truth. No sugar coating. No motivational fluff.</p>
        
        <p>Just the reality check you need to stop making excuses and start executing.</p>
        
        <p>The dopamine detox starts now. The comfort zone ends here.</p>
        
        <p style="margin-top: 30px; color: #ff0000; font-weight: bold;">Stay hard.</p>
        
        <p style="margin-top: 20px; font-size: 12px; color: #666;">
            — Zero Dopamine Project<br>
            Building warriors, not victims.
        </p>
    </div>
    `,
});
