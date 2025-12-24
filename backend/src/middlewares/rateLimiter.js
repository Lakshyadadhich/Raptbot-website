const rateLimit = require('express-rate-limit');

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 5,
  message: 'Too many contact requests from this IP, please try again later',
});

module.exports = contactLimiter;
