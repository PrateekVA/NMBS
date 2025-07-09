const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
//cors helps front end to connect with backend
app.use(express.json()); 
//this is used for parsing the json object.

// for /About page, assigns respose (message) to the request.
app.get('/About', (req, res) => {
  res.json({ message: "Hello, I am creating an API using Node.js and consuming it using React.js" });
});

const PORT = 5000;
//Server will be running on port 5000, where front will listen to this port.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
