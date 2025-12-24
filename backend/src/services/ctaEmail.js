import nodemailer from 'nodemailer';

export const sendCtaEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'dadhichlakshya1@gmail.com',
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });

  const senderName = process.env.EMAIL_FROM_NAME_CTA || 'Raptbot CTA';
  const senderEmail = 'dadhichlakshya1@gmail.com';
  const toEmail = 'hr@raptbot.com'; // ✅ Your email

  // ✅ Log email details
  console.log('\n📧 ========== CTA EMAIL LOG ==========');
  console.log('📋 Email Type: CTA Form - Transform Your Business');
  console.log('👤 Sender Email:', senderEmail);
  console.log('👤 Sender Name:', senderName);
  console.log('📬 Receiver Email:', toEmail);
  console.log('📧 Subscriber Email:', email);
  console.log('📅 Timestamp:', new Date().toISOString());
  console.log('=====================================\n');

  const mailOptions = {
    from: `"${senderName}" <${senderEmail}>`,
    to: toEmail,
    replyTo: email, // User's email
    subject: 'New Business Inquiry - Transform Your Business',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Business Inquiry</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 20px 0; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                🚀 New Business Inquiry
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 20px; background-color: #ffffff;">
              <div style="max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333333; margin-top: 0; font-size: 24px; border-bottom: 3px solid #667eea; padding-bottom: 10px;">
                  Transform Your Business - Contact Request
                </h2>
                
                <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 25px; border-radius: 10px; margin: 25px 0;">
                  <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">
                    <strong style="color: #667eea;">📧 Subscriber Email:</strong>
                  </p>
                  <p style="color: #333333; font-size: 18px; font-weight: bold; margin: 0;">
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                  </p>
                </div>

                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #667eea;">
                  <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 0;">
                    <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 10px 0 0 0;">
                    <strong>📍 Source:</strong> CTA Section - "Transform your business contact us today"
                  </p>
                </div>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="mailto:${email}" 
                     style="background: linear-gradient(90deg, #667eea, #764ba2); 
                            color: #ffffff; 
                            padding: 12px 30px; 
                            text-decoration: none; 
                            border-radius: 5px; 
                            display: inline-block; 
                            font-weight: bold;
                            font-size: 16px;">
                    Reply to Subscriber
                  </a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; text-align: center; background-color: #f4f4f4;">
              <p style="color: #999999; font-size: 12px; margin: 0;">
                This email was sent from your website's CTA form.<br>
                Raptbot Technologies - IT Solutions for a Smarter Future
              </p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('\n✅ ========== CTA EMAIL SUCCESS ==========');
    console.log('✅ Status: Email sent successfully');
    console.log('📧 Message ID:', info.messageId);
    console.log('👤 Sender:', senderEmail);
    console.log('📬 Receiver:', toEmail);
    console.log('📧 Subscriber:', email);
    console.log('📅 Sent At:', new Date().toISOString());
    console.log('==========================================\n');
    return info;
  } catch (error) {
    console.error('\n❌ ========== CTA EMAIL ERROR ==========');
    console.error('❌ Status: Email sending failed');
    console.error('👤 Sender:', senderEmail);
    console.error('📬 Receiver:', toEmail);
    console.error('📧 Subscriber:', email);
    console.error('❌ Error Code:', error.code);
    console.error('❌ Error Message:', error.message);
    
    // Provide helpful error messages
    if (error.code === 'ETIMEDOUT' || error.code === 'ECONNREFUSED') {
      console.error('💡 Troubleshooting Tips:');
      console.error('   1. Check your internet connection');
      console.error('   2. Verify EMAIL_PASS in .env file is correct');
      console.error('   3. Ensure Gmail account has App Password enabled');
      console.error('   4. Check if firewall/antivirus is blocking port 587');
    } else if (error.code === 'EAUTH') {
      console.error('💡 Authentication Error:');
      console.error('   1. Verify EMAIL_PASS is correct (use App Password)');
      console.error('   2. Generate App Password: https://myaccount.google.com/apppasswords');
    }
    
    console.error('==========================================\n');
    throw error;
  }
};

