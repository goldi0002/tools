const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/jokes', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API route for fetching jokes
app.get('/api/joke', async (req, res) => {
  console.log('Received request for a joke');
  const lang = req.query.lang || 'en';
  try {
    const response = await axios.get(
      `https://v2.jokeapi.dev/joke/Any?lang=${lang}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send('<h1>404 - Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
