const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { Builder } = require('xml2js');

const app = express();
app.use(cors());

// GET route to serve XML from JSON
app.get('/api/xml', (req, res) => {
  const jsonData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  const builder = new Builder();
  const xml = builder.buildObject(jsonData);
  res.type('application/xml').send(xml);
});

app.listen(5000, () => console.log('Backend running on port 5000'));
