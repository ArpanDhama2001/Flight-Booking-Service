const SEAT_TYPE = {
    BUSINESS: "business",
    ECONOMY: "economy",
    PREMIUM_ECONOMY: "premium-economy",
    FIRST_CLASS: "first-class",
};

const BOOKING_STATUS = {
    BOOKED: "booked",
    CANCELLED: "cancelled",
    INITIATED: "initiated",
    PENDING: "pending",
};

const FLIGHT_EXPIRATION_TIME = 300000; // in ms => 5 mins

module.exports = {
    SEAT_TYPE,
    BOOKING_STATUS,
    FLIGHT_EXPIRATION_TIME,
};
