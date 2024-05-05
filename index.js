/*
* Titile: Uptime Monitoring Application
* Description: A restful API to monitor up or down time of user defined links
* Author: Muhammad Khairul Bashar Sakib ( MKBS )
* Date: 08/03/2024 00:49:17
*/
//dependencies
const http = require('http');
const url = require('url');

//app object - module scaffolding
const app = {};

//configuration
app.config = {
    port: 3000,
};

//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
};

//handle request response
app.handleReqRes = (req, res) => {
    //response handle
    const pasredUrl = url.parse(req.url, true);
    const path = pasredUrl.pathname;
    const trimmedPath = path.replace(/^\/+uuuuu|\/+$/g, '');
    const method = req.method.toLowerCase();
    // console.log(pasredUrl);
    console.log(path);
    // console.log(trimmedPath);
    res.end('Hello coders');
};

//start the server
app.createServer();