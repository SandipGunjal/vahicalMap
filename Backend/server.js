const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const vehicleData = require('./vehicleData.json'); // Assuming JSON file with dummy data

let index = 0;

app.get('/api/vehicle', (req, res) => {
  const vehicle = vehicleData[index];
  index = (index + 1) % vehicleData.length; // Loop through data
  res.json(vehicle);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
