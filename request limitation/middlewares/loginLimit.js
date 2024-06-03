const rateLimit = require('express-rate-limit')

const loginLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
})

exports.loginLimit = loginLimit 