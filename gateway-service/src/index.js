const express = require('express');
const gatewayRoutes = require('./routes/gatewayRoutes');

const app = express();

app.use(express.json());

// Use gateway routes
app.use('/', gatewayRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Gateway service is running on port ${PORT}`));
