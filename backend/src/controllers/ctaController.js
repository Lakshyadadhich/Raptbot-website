import { sendCtaEmail } from '../services/ctaEmail.js';
import Joi from 'joi';

// Validation schema for CTA form
const ctaSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const sendCtaForm = async (req, res) => {
  // Validate incoming data
  const { error, value } = ctaSchema.validate(req.body);

  if (error) {
    console.warn('❌ CTA Validation Error:', error.details[0].message);
    return res.status(400).json({ 
      success: false,
      message: error.details[0].message 
    });
  }

  try {
    const info = await sendCtaEmail(value.email);
    console.log('✅ CTA Email successfully sent:', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Thank you for your interest! We will contact you soon.',
      messageId: info.messageId || null,
    });
  } catch (err) {
    console.error('❌ CTA Email sending failed:', err);

    return res.status(500).json({
      success: false,
      message: 'Failed to process your request',
      error: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  }
};

