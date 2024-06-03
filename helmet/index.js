const express = require('express')
const app = express()
const helmet = require('helmet')

// Helmet helps secure Express apps by setting HTTP response headers.

// By default, Helmet sets the following headers:
    // Content-Security-Policy: A powerful allow-list of what can happen on your page which mitigates many attacks
    // Cross-Origin-Opener-Policy: Helps process-isolate your page
    // Cross-Origin-Resource-Policy: Blocks others from loading your resources cross-origin
    // Origin-Agent-Cluster: Changes process isolation to be origin-based
    // Referrer-Policy: Controls the Referer header
    // Strict-Transport-Security: Tells browsers to prefer HTTPS
    // X-Content-Type-Options: Avoids MIME sniffing
    // X-DNS-Prefetch-Control: Controls DNS prefetching
    // X-Download-Options: Forces downloads to be saved (Internet Explorer only)
    // X-Frame-Options: Legacy header that mitigates clickjacking attacks
    // X-Permitted-Cross-Domain-Policies: Controls cross-domain behavior for Adobe products, like Acrobat
    // X-Powered-By: Info about the web server. Removed because it could be used in simple attacks
    // X-XSS-Protection: Legacy header that tries to mitigate XSS attacks, but makes things worse, so Helmet disables it
// 

app.use(helmet())


app.get('/home',(req,res) => {

    res.send('Home Page')

})

app.listen(3000,() => {
    console.log('server runing')
})