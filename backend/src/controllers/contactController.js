import { sendEmail } from '../services/email.js';
import Joi from 'joi';

// Validation schema
const contactSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  number: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
  subject: Joi.string().min(2).max(100).required(),
  message: Joi.string().min(10).max(1000).required(),
});

export const sendContactEmail = async (req, res) => {
  // Validate incoming data
  const { error, value } = contactSchema.validate(req.body);

  if (error) {
    console.warn('❌ Validation Error:', error.details[0].message);
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const info = await sendEmail(value);
    console.log('✅ Email successfully sent:', info);

    return res.status(200).json({
      message: 'Message sent successfully',
      messageId: info.messageId || null,
    });
  } catch (err) {
    console.error('❌ Email sending failed:', err);

    // Send detailed error back to frontend for debugging (you can hide later in production)
    return res.status(500).json({
      message: 'Failed to send email',
      error: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  }
};
