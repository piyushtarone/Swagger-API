// config/swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple User Auth API',
      version: '1.0.0',
      description: 'Basic auth + user APIs with Swagger docs'
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Local server' }
    ],
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }
      }
    }
  },
  // use absolute path to routes to avoid path issues
  apis: [path.join(__dirname, '..', 'routes', '*.js')],
};

console.log('Swagger loading files from:', options.apis);
const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
