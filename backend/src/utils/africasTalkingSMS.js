const dotenv = require('dotenv');
const africastalking = require('africastalking');

dotenv.config();

const apiKey = process.env.AFRICASTALKING_API_KEY;
const apiUsername = process.env.AFRICASTALKING_USERNAME;
const atSMS = africastalking({apiKey, apiUsername});
const messaging = atSMS.SMS;

module.exports = messaging;