import express from 'express';
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use('/haggle-credit', createProxyMiddleware({ target: 'https://k4d107.p.ssafy.io:', changeOrigin: true }));
app.listen(3006);