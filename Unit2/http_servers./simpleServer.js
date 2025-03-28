const http  = require('http');
const fs = require('fs');
const path = require('path');

const httpServer = http.createServer(requestResponseHandler);
httpServer.listen(3000, () => {
  console.log('Node.JS static file server is listening on port 3000')
})
function requestResponseHandler(request, response){
    console.log(`Request came: ${request.url}`);
    //decides what to do for whatever the url request is
    console.log(`Request came: ${request.method}`)
    if(request.method === 'GET'){
      if(request.url === '/'){
        sendResponse('index.html', 'text/html', response)
      } else {
        sendResponse(request.url, getContentType(request.url), response);
      }
    }
    else if (request.method === 'POST'){
      let body = ""
      request.on("data", function (chunk) {
              body += chunk;
          });
  
          request.on("end", function(){
              response.writeHead(200, { "Content-Type": "text/html" });
              response.end(body);
          });
    }
  }
  

function sendResponse(url, contentType, res){
  let file = path.join(__dirname, url);
  fs.readFile(file, (err, content) => {
    if(err){
      res.writeHead(404);
      res.write(`File '${file}' Not Found!`);
      res.end();
      console.log("Response: 404 ${file}, err");
    }else{
      res.writeHead(200, {'Content-Type': contentType});
      res.write(content);
      res.end();
      console.log(`Response: 200 ${file}`);
    }
  })
}
function getContentType(url){
  switch (path.extname(url)) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    default:
      return 'application/octate-stream';
  }
}
