const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req,res)=>{
    
    const url = req.url;
    if(url === '/home'){
    res.end("Welcome home!");
    }
    else if(url === '/about'){
        res.end("Welcome to About Us page");
    }
    else if(url === '/node'){
        res.end("Welcome to my Node Js project");
    }
    else{
        res.end("welcome guys!")
    }
    
    
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
  });
  