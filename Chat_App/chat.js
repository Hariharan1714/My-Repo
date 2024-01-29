const http = require('http');
const fs = require('fs');
const path = require('path');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    const body = [];

    if (url === '/') {
        fs.readFile("message.txt", { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                console.log(err);
                return res.end();
            }

            console.log('data from file' + data);
            res.write("<html>");
            res.write("<head><title>Enter Message</title></head>");
            res.write(`<body>${data}</body>`);
            res.write(
                `<body><form action="/message" method="POST"><input type="text" name="message"/>
                <button type="submit">Send</button></form></body>`
            );
            res.write("</html>");
            return res.end();
        });
    } else if (url === "/message" && method === "POST") {
        req.on("data", (chunk) => {
            body.push(chunk);
        });

        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt", message, (err) => {
                console.log('inside fs.writeFile');
                if (err) {
                    console.log(err);
                    return res.end();
                }
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    } else {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My first page</title></head>");
        res.write("<body><h1>Hello from Node JS</h1></body>");
        res.write("</html>");
        res.end();
    }
};

const server = http.createServer(requestHandler);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
