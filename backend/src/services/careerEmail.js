// import nodemailer from "nodemailer";

// export const sendCareerEmail = async (formData, resumeFile) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const attachments = [];
//   if (resumeFile) {
//     attachments.push({
//       filename: resumeFile.originalname,
//       content: resumeFile.buffer,
//       contentType: resumeFile.mimetype,
//     });
//   }

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     replyTo: formData.email,
//     to: process.env.EMAIL_USER,
//     subject: `New Career Application - ${formData.firstName} ${formData.lastName}`,
//     html: `
//       <div style="
//         font-family: Arial, sans-serif;
//         background-color: #f9f9f9;
//         padding: 20px;
//         border-radius: 10px;
//         color: #333;
//       ">
//         <h2 style="
//           text-align: center;
//           color: #456bcbff;
//           border-bottom: 2px solid #456bcbff;
//           padding-bottom: 10px;
//         ">New Career Application</h2>

//         <div style="margin-top: 20px; line-height: 1.6;">
//           <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
//           <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #456bcbff; text-decoration: none;">${formData.email}</a></p>
//           <p><strong>Contact:</strong> ${formData.contact}</p>
//           <p><strong>Address:</strong> ${formData.address}</p>
//           <p><strong>Gender:</strong> ${formData.gender}</p>
//         </div>

//         <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;"/>

//         <h3 style="color: #456bcbff;">Professional Details</h3>
//         <div style="line-height: 1.6;">
//           <p><strong>Total Experience:</strong> ${formData.totalExperience}</p>
//           <p><strong>Currently Working:</strong> ${formData.currentlyWorking === 'yes' ? 'Yes' : 'No'}</p>
//           <p><strong>Notice Period:</strong> ${formData.noticePeriod}</p>
//         </div>

//         <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;"/>

//         <h3 style="color: #456bcbff;">Current/Last Employment</h3>
//         <div style="line-height: 1.6;">
//           <p><strong>Job Title:</strong> ${formData.jobTitle}</p>
//           <p><strong>Company:</strong> ${formData.companyName}</p>
//           <p><strong>Location:</strong> ${formData.officeLocation}</p>
//           <p><strong>Description:</strong></p>
//           <p style="
//             background-color: #f1f1f1;
//             padding: 10px;
//             border-radius: 5px;
//             color: #555;
//           ">${formData.description}</p>
//           <p><strong>From:</strong> ${formData.fromDate}</p>
//           <p><strong>To:</strong> ${formData.toDate}</p>
//         </div>

//         <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;"/>

//         <h3 style="color: #456bcbff;">Compensation</h3>
//         <div style="line-height: 1.6;">
//           <p><strong>Current CTC:</strong> ${formData.currentCtc || "N/A"}</p>
//           <p><strong>Expected CTC:</strong> ${formData.expectedCtc || "N/A"}</p>
//         </div>

//         <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;"/>

//         <div style="line-height: 1.6;">
//           <p><strong>Message:</strong></p>
//           <p style="
//             background-color: #f1f1f1;
//             padding: 10px;
//             border-radius: 5px;
//             color: #555;
//           ">${formData.message || "No message provided"}</p>

//           ${resumeFile ? `
//           <div style="
//             background-color: #e8f5e9;
//             padding: 15px;
//             border-radius: 5px;
//             margin-top: 20px;
//             text-align: center;
//           ">
//             <p style="margin: 0; color: #456bcbff; font-weight: bold;">
//               📎 Resume Attached: ${resumeFile.originalname}
//             </p>
//             <p style="margin: 5px 0 0 0; font-size: 12px; color: #555;">
//               Please check the email attachments to download the resume.
//             </p>
//           </div>
//           ` : ''}
//         </div>

//         <p style="margin-top: 30px; text-align: center; font-size: 12px; color: #999;">
//           This message was sent from your website's career form.
//         </p>
//       </div>
//     `,
//     attachments: attachments,
//   };

//   const info = await transporter.sendMail(mailOptions);
//   return info;
// };

import nodemailer from "nodemailer";

export const sendCareerEmail = async (formData, resumeFile, senderOptions = {}) => {
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

  const attachments = [];
  if (resumeFile) {
    attachments.push({
      filename: resumeFile.originalname,
      content: resumeFile.buffer,
      contentType: resumeFile.mimetype,
    });
  }

  // ✅ Dynamically set sender name and email (fallback to .env)
  const senderName = senderOptions.name || process.env.EMAIL_FROM_NAME || "Career Job";
  const senderEmail = 'dadhichlakshya1@gmail.com';
  
  const toEmail = "hr@raptbot.com"; // ✅ Your email

  // ✅ Log email details
  console.log('\n📧 ========== CAREER EMAIL LOG ==========');
  console.log('📋 Email Type: Career Application Form');
  console.log('👤 Sender Email:', senderEmail);
  console.log('👤 Sender Name:', senderName);
  console.log('📬 Receiver Email:', toEmail);
  console.log('👤 Applicant Name:', `${formData.firstName || 'N/A'} ${formData.lastName || 'N/A'}`);
  console.log('📧 Applicant Email:', formData.email || 'N/A');
  console.log('📱 Applicant Contact:', formData.contact || 'N/A');
  console.log('💼 Job Title:', formData.jobTitle || 'N/A');
  console.log('🏢 Company:', formData.companyName || 'N/A');
  console.log('📎 Resume File:', resumeFile ? `${resumeFile.originalname} (${(resumeFile.size / 1024).toFixed(2)} KB)` : 'No file');
  console.log('📅 Timestamp:', new Date().toISOString());
  console.log('==========================================\n');

  const mailOptions = {
    from: `"${senderName}" <${senderEmail}>`,
    to: toEmail,
    replyTo: formData.email,
    subject: `New Career Application - ${formData.firstName} ${formData.lastName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Career Application</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 20px 0; text-align: center; background: linear-gradient(135deg, #456bcb 0%, #3a5ba8 100%);">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                💼 New Career Application
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 20px; background-color: #ffffff;">
              <div style="max-width: 700px; margin: 0 auto;">
                <h2 style="color: #333333; margin-top: 0; font-size: 24px; border-bottom: 3px solid #456bcb; padding-bottom: 10px;">
                  Job Application Received
                </h2>
                
                <!-- Personal Information -->
                <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 25px; border-radius: 10px; margin: 25px 0;">
                  <h3 style="color: #456bcb; margin-top: 0; font-size: 20px; border-bottom: 2px solid #456bcb; padding-bottom: 8px;">
                    👤 Personal Information
                  </h3>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                    <div>
                      <p style="color: #555555; font-size: 14px; margin: 0 0 5px 0;"><strong>Full Name:</strong></p>
                      <p style="color: #333333; font-size: 16px; font-weight: bold; margin: 0;">${formData.firstName} ${formData.lastName}</p>
                    </div>
                    <div>
                      <p style="color: #555555; font-size: 14px; margin: 0 0 5px 0;"><strong>Email:</strong></p>
                      <p style="color: #333333; font-size: 16px; margin: 0;">
                        <a href="mailto:${formData.email}" style="color: #456bcb; text-decoration: none;">${formData.email}</a>
                      </p>
                    </div>
                    <div>
                      <p style="color: #555555; font-size: 14px; margin: 0 0 5px 0;"><strong>Contact:</strong></p>
                      <p style="color: #333333; font-size: 16px; margin: 0;">
                        <a href="tel:${formData.contact}" style="color: #456bcb; text-decoration: none;">${formData.contact}</a>
                      </p>
                    </div>
                    <div>
                      <p style="color: #555555; font-size: 14px; margin: 0 0 5px 0;"><strong>Gender:</strong></p>
                      <p style="color: #333333; font-size: 16px; margin: 0;">${formData.gender || 'N/A'}</p>
                    </div>
                  </div>
                  ${formData.address ? `
                    <div style="margin-top: 15px;">
                      <p style="color: #555555; font-size: 14px; margin: 0 0 5px 0;"><strong>Address:</strong></p>
                      <p style="color: #333333; font-size: 15px; margin: 0;">${formData.address}</p>
                    </div>
                  ` : ''}
                </div>

                <!-- Professional Details -->
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #456bcb;">
                  <h3 style="color: #456bcb; margin-top: 0; font-size: 18px;">💼 Professional Details</h3>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
                    <div>
                      <p style="color: #666666; font-size: 14px; margin: 0 0 5px 0;"><strong>Total Experience:</strong></p>
                      <p style="color: #333333; font-size: 15px; margin: 0;">${formData.totalExperience || 'N/A'}</p>
                    </div>
                    <div>
                      <p style="color: #666666; font-size: 14px; margin: 0 0 5px 0;"><strong>Currently Working:</strong></p>
                      <p style="color: #333333; font-size: 15px; margin: 0;">${formData.currentlyWorking === "yes" ? "Yes" : "No"}</p>
                    </div>
                    <div>
                      <p style="color: #666666; font-size: 14px; margin: 0 0 5px 0;"><strong>Notice Period:</strong></p>
                      <p style="color: #333333; font-size: 15px; margin: 0;">${formData.noticePeriod || 'N/A'}</p>
                    </div>
                  </div>
                </div>

                <!-- Current/Last Employment -->
                ${formData.jobTitle || formData.companyName ? `
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #456bcb;">
                  <h3 style="color: #456bcb; margin-top: 0; font-size: 18px;">🏢 Current/Last Employment</h3>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
                    ${formData.jobTitle ? `
                      <div>
                        <p style="color: #666666; font-size: 14px; margin: 0 0 5px 0;"><strong>Job Title:</strong></p>
                        <p style="color: #333333; font-size: 15px; margin: 0;">${formData.jobTitle}</p>
                      </div>
                    ` : ''}
                    ${formData.companyName ? `
                      <div>
                        <p style="color: #666666; font-size: 14px; margin: 0 0 5px 0;"><strong>Company:</strong></p>
                        <p style="color: #333333; font-size: 15px; margin: 0;">${formData.companyName}</p>
                      </div>
                    ` : ''}
                    ${formData.officeLocation ? `
                      <div>
                        <p style="color: #666666; font-size: 14px; margin: 0 0 5px 0;"><strong>Location:</strong></p>
                        <p style="color: #333333; font-size: 15px; margin: 0;">${formData.officeLocation}</p>
                      </div>
                    ` : ''}
                    ${formData.fromDate || formData.toDate ? `
                      <div>
                        <p style="color: #666666; font-size: 14px; margin: 0 0 5px 0;"><strong>Duration:</strong></p>
                        <p style="color: #333333; font-size: 15px; margin: 0;">${formData.fromDate || 'N/A'} - ${formData.toDate || 'Present'}</p>
                      </div>
                    ` : ''}
                  </div>
                  ${formData.description ? `
                    <div style="margin-top: 15px;">
                      <p style="color: #666666; font-size: 14px; margin: 0 0 5px 0;"><strong>Description:</strong></p>
                      <p style="color: #333333; font-size: 14px; line-height: 1.6; margin: 0; background-color: #ffffff; padding: 10px; border-radius: 5px;">${formData.description}</p>
                    </div>
                  ` : ''}
                </div>
                ` : ''}

                <!-- Compensation -->
                ${formData.currentCtc || formData.expectedCtc ? `
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #456bcb;">
                  <h3 style="color: #456bcb; margin-top: 0; font-size: 18px;">💰 Compensation</h3>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
                    <div>
                      <p style="color: #666666; font-size: 14px; margin: 0 0 5px 0;"><strong>Current CTC:</strong></p>
                      <p style="color: #333333; font-size: 15px; margin: 0;">${formData.currentCtc || "N/A"}</p>
                    </div>
                    <div>
                      <p style="color: #666666; font-size: 14px; margin: 0 0 5px 0;"><strong>Expected CTC:</strong></p>
                      <p style="color: #333333; font-size: 15px; margin: 0;">${formData.expectedCtc || "N/A"}</p>
                    </div>
                  </div>
                </div>
                ` : ''}

                <!-- Message -->
                ${formData.message ? `
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #456bcb;">
                  <p style="color: #666666; font-size: 14px; margin: 0 0 10px 0;"><strong>💬 Message for Hiring Team:</strong></p>
                  <p style="color: #333333; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${formData.message}</p>
                </div>
                ` : ''}

                <!-- Resume Attachment -->
                ${
                  resumeFile
                    ? `<div style="background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center; border: 2px dashed #456bcb;">
                        <p style="margin: 0; color: #456bcb; font-weight: bold; font-size: 16px;">
                          📎 Resume Attached: ${resumeFile.originalname}
                        </p>
                        <p style="margin: 8px 0 0 0; font-size: 13px; color: #555;">
                          Please check the email attachments to download the resume.
                        </p>
                      </div>`
                    : ""
                }

                <!-- Submission Info -->
                <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin: 25px 0;">
                  <p style="color: #1976d2; font-size: 14px; line-height: 1.6; margin: 0;">
                    <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  <p style="color: #1976d2; font-size: 14px; line-height: 1.6; margin: 10px 0 0 0;">
                    <strong>📍 Source:</strong> Career Page - Job Application Form
                  </p>
                </div>

                <!-- Action Button -->
                <div style="text-align: center; margin: 30px 0;">
                  <a href="mailto:${formData.email}?subject=Re: Job Application - ${encodeURIComponent(formData.firstName + ' ' + formData.lastName)}" 
                     style="background: linear-gradient(90deg, #456bcb, #3a5ba8); 
                            color: #ffffff; 
                            padding: 12px 30px; 
                            text-decoration: none; 
                            border-radius: 5px; 
                            display: inline-block; 
                            font-weight: bold;
                            font-size: 16px;">
                    Reply to ${formData.firstName}
                  </a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; text-align: center; background-color: #f4f4f4;">
              <p style="color: #999999; font-size: 12px; margin: 0;">
                This email was sent from your website's career application form.<br>
                Raptbot Technologies - IT Solutions for a Smarter Future
              </p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
    attachments,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('\n✅ ========== CAREER EMAIL SUCCESS ==========');
    console.log('✅ Status: Email sent successfully');
    console.log('📧 Message ID:', info.messageId);
    console.log('👤 Sender:', senderEmail);
    console.log('📬 Receiver:', toEmail);
    console.log('👤 Applicant:', `${formData.firstName || 'N/A'} ${formData.lastName || 'N/A'}`);
    console.log('📧 Applicant Email:', formData.email || 'N/A');
    console.log('📎 Resume:', resumeFile ? `${resumeFile.originalname} (${(resumeFile.size / 1024).toFixed(2)} KB)` : 'No file');
    console.log('📅 Sent At:', new Date().toISOString());
    console.log('===========================================\n');
    return info;
  } catch (error) {
    console.error('\n❌ ========== CAREER EMAIL ERROR ==========');
    console.error('❌ Status: Email sending failed');
    console.error('👤 Sender:', senderEmail);
    console.error('📬 Receiver:', toEmail);
    console.error('👤 Applicant:', `${formData.firstName || 'N/A'} ${formData.lastName || 'N/A'}`);
    console.error('📧 Applicant Email:', formData.email || 'N/A');
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
    
    console.error('===========================================\n');
    throw error;
  }
};
