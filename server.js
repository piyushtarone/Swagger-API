// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

const app = express();
app.use(bodyParser.json());

// serve static files for swagger client init
app.use('/public', express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Swagger UI on /docs (inject custom JS to auto-add Authorization header from localStorage)
const swaggerUiOptions = {
  explorer: true,
  customJs: '/public/swagger-init.js'
};
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));

// Root
app.get('/', (req, res) => res.send('Swagger API demo. Visit /docs for Swagger UI'));

const PORT = process.env.PORT || 3000;
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/swaggerDB';

// Connect to MongoDB
mongoose.connect(MONGO)
  .then(() => {
    console.log('Mongo connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Mongo connection error', err);
    // Start server anyway so you can debug
    app.listen(PORT, () => console.log(`Server running on port ${PORT} (DB maybe not connected)`));
  });
