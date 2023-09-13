const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) =>{
    const url = req.url
    const method = req.method

    if (url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Node webpage</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" ><button type="submit">Submit</button></form</body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'Hi you have written a message')
        res.writeHead(302, {'Location': '/'})
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Node webpage</title></head>')
    res.write('<body><h1>This is the main page</h1></body>')
    res.write('</html>')
    res.end()
   
})


server.listen(3000)