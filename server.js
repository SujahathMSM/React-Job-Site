// server.js
const jsonServer = require('json-server');
const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const apiServer = jsonServer.create();
const apiRouter = jsonServer.router(path.join(__dirname, 'src', 'jobs.json'));
const middlewares = jsonServer.defaults();

apiServer.use(middlewares);
apiServer.use('/api', apiRouter);

// Start json-server on a different port
const apiPort = process.env.API_PORT || 5000;
apiServer.listen(apiPort, () => {
  console.log(`JSON Server is running on port ${apiPort}`);
});

// Vite middleware to serve the front-end
app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
