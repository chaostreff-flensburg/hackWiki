import express from 'express';

import api from './app';

const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.set('port', port);

// Import API Routes
app.use('/api', api);

// Listen the server
const server = app.listen(port, host);
api.setup(server);

console.log(`Server listening on ${host}:${port}`); // eslint-disable-line no-console
