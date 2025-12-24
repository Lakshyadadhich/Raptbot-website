import { sendSubscriptionEmail } from "../services/subscriptionEmail.js";

export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    const info = await sendSubscriptionEmail(email);

    res.status(200).json({
      success: true,
      message: "Subscription successful",
      info,
    });
  } catch (error) {
    console.error("❌ Subscription Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process subscription",
      error: error.message,
    });
  }
};