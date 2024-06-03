const rateLimit = require('express-rate-limit')

const postLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    message: "you can't send requests within 15 minutes"
})

module.exports = { postLimit }