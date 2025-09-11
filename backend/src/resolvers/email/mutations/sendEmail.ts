import { SendTySubEmail } from '../../../services/resend.js';

const TY_SUBJECT = "You're in. Welcome to Zero Dopamine Project!";
const TY_BODY = `
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
`;

export const sendWelcomeEmail = async (_: any, { input }: { input: { to: string } }) => {
  try {
    const result = await SendTySubEmail({
      to: input.to,
      subject: TY_SUBJECT,
      body: TY_BODY,
    });

    if (result.error) {
      return {
        success: false,
        message: null,
        error: result.error.message || 'Failed to send email'
      };
    }

    return {
      success: true,
      message: 'Welcome email sent successfully',
      error: null
    };
  } catch (error: any) {
    console.error('Error sending welcome email:', error);
    return {
      success: false,
      message: null,
      error: error.message || 'Failed to send email'
    };
  }
};