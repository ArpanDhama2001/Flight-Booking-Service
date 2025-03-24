const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    FLIGHT_SERVICE: process.env.FLIGHT_SERVICE,
    RECEPIENT_EMAIL: process.env.RECEPIENT_EMAIL,
};
