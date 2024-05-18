const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/weather', async (req, res) => {
    const { city } = req.query;
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=03682fae135d4d6f8a733407241805&q=${city}`);
        const weather = response.data;
        res.json(weather.current);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch weather' });
    }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
