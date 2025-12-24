import nodemailer from "nodemailer";

export const sendSubscriptionEmail = async (email) => {
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

  const senderName = process.env.EMAIL_FROM_NAME2 || "Subscription";
  const senderEmail = 'dadhichlakshya1@gmail.com';

  const toEmail = "lakshyadadhich175@gmail.com"; // ✅ Your email

  // ✅ Log email details
  console.log('\n📧 ========== SUBSCRIPTION EMAIL LOG ==========');
  console.log('📋 Email Type: Newsletter Subscription');
  console.log('👤 Sender Email:', senderEmail);
  console.log('👤 Sender Name:', senderName);
  console.log('📬 Admin Receiver Email:', toEmail);
  console.log('📧 Subscriber Email:', email);
  console.log('📅 Timestamp:', new Date().toISOString());
  console.log('===============================================\n');

  // Admin notification
  const adminMailOptions = {
    from: `"${senderName}" <${senderEmail}>`,
    to: toEmail,
    replyTo: email, // subscriber's email
    subject: `New Newsletter Subscription - ${email}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #007bff;">New Newsletter Subscription! 🎉</h2>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Subscriber Email:</strong> ${email}</p>
          <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
        </div>
        <p style="color: #6c757d; font-size: 12px;">This is an automated notification from your website.</p>
      </div>
    `,
  };

  // Welcome email to subscriber
  const subscriberMailOptions = {
    from: `"${senderName}" <${senderEmail}>`,
    to: email,
    subject: "Welcome to Our Newsletter! 🚀",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; border-radius: 10px;">
        <div style="background: white; padding: 30px; border-radius: 8px;">
          <h1 style="color: #333; text-align: center; margin-bottom: 20px;">Welcome Aboard! 🎉</h1>
          <p style="color: #666; font-size: 16px; line-height: 1.6; text-align: center;">
            Thank you for subscribing to our newsletter!
          </p>
          <p style="color: #666; font-size: 16px; line-height: 1.6; text-align: center;">
            You'll now receive updates about our latest news, products, and exclusive offers.
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.WEBSITE_URL || "https://yourwebsite.com"}"
               style="background: linear-gradient(90deg, #0072ff, #00c6ff); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
              Visit Our Website
            </a>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            If you didn't subscribe to this newsletter, please ignore this email.
          </p>
        </div>
      </div>
    `,
  };

  // Send both emails
  try {
    // Verify connection first
    console.log('🔍 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully');
    
    console.log('📤 Sending admin notification email...');
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log('✅ Admin email sent - Message ID:', adminInfo.messageId);
    
    console.log('📤 Sending welcome email to subscriber...');
    const info = await transporter.sendMail(subscriberMailOptions);
    console.log('✅ Subscriber email sent - Message ID:', info.messageId);
    
    console.log('\n✅ ========== SUBSCRIPTION EMAIL SUCCESS ==========');
    console.log('✅ Status: Both emails sent successfully');
    console.log('👤 Sender:', senderEmail);
    console.log('📬 Admin Receiver:', toEmail);
    console.log('📧 Subscriber:', email);
    console.log('📧 Admin Message ID:', adminInfo.messageId);
    console.log('📧 Subscriber Message ID:', info.messageId);
    console.log('📅 Sent At:', new Date().toISOString());
    console.log('==================================================\n');
    
    return info;
  } catch (error) {
    console.error('\n❌ ========== SUBSCRIPTION EMAIL ERROR ==========');
    console.error('❌ Status: Email sending failed');
    console.error('👤 Sender:', senderEmail);
    console.error('📬 Admin Receiver:', toEmail);
    console.error('📧 Subscriber:', email);
    console.error('❌ Error Code:', error.code);
    console.error('❌ Error Message:', error.message);
    
    // Provide helpful error messages
    if (error.code === 'ETIMEDOUT' || error.code === 'ECONNREFUSED') {
      console.error('💡 Troubleshooting Tips:');
      console.error('   1. Check your internet connection');
      console.error('   2. Verify EMAIL_PASS in .env file is correct');
      console.error('   3. Ensure Gmail account has "Less secure app access" enabled OR use App Password');
      console.error('   4. Check if firewall/antivirus is blocking port 587');
      console.error('   5. Try using port 465 with secure: true if 587 doesn\'t work');
    } else if (error.code === 'EAUTH') {
      console.error('💡 Authentication Error:');
      console.error('   1. Verify EMAIL_PASS is correct (use App Password, not regular password)');
      console.error('   2. Enable 2-Step Verification in Google Account');
      console.error('   3. Generate App Password: https://myaccount.google.com/apppasswords');
    }
    
    console.error('==================================================\n');
    throw error;
  }
};
