import { sendCareerEmail } from "../services/careerEmail.js";

export const applyForJob = async (req, res) => {
  try {
    const formData = req.body;
    const resumeFile = req.file; // ✅ Get uploaded file from multer

    if (!resumeFile) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required",
      });
    }

    // ✅ Pass both form data and file to email service
    const info = await sendCareerEmail(formData, resumeFile);

    res.status(200).json({
      success: true,
      message: "Application sent successfully",
      info,
    });
  } catch (error) {
    console.error("❌ Career Application Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send application",
      error: error.message,
    });
  }
};