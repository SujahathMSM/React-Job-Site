const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const apiServer = jsonServer.create();
const apiRouter = jsonServer.router(path.join(__dirname, 'src', 'jobs.json'));
const middlewares = jsonServer.defaults();

// Serve JSON Server API
apiServer.use(middlewares);
apiServer.use('/api', apiRouter);

// Start JSON Server on a different port
const apiPort = process.env.API_PORT || 5000;
apiServer.listen(apiPort, () => {
  console.log(`JSON Server is running on port ${apiPort}`);
});

// Serve the Vite app
app.use(express.static(path.join(__dirname, 'dist')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
