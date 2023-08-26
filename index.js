const http = require("http");
const app = require("./app");
const express = require('express');


app.set(process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = http.createServer(app);
server.listen(process.env.PORT || 3000);