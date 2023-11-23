const http=require('http');
const{readFileSync}=require('fs');
const homepage=readFileSync('./navbar-app/index.html');
const homestyles=readFileSync('./navbar-app/styles.css');
const homelogo=readFileSync('./navbar-app/logo.svg');
const homestyle=readFileSync('./navbar-app/browser-app.js');
const server=http.createServer((req,res)=>{
    console.log(1);
    if(req.url=='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homepage)
        res.end();
    }
    else  if(req.url=='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homestyles);
        res.end();

    }
    else if(req.url=='/logo.svg'){
        res.writeHead(200,{'content':'image/svg+xml'});
        res.write(homelogo);
        res.end();

    }
    else if(req.url=='/browser-app.js'){
        res.writeHead(200,{'content':'text/javascript'});
        res.write(homestyle);
        res.end();



    }
})
server.listen(3000);