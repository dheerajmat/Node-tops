const express = require('express');
const axios = require('axios');
const hbs = require('hbs');

const app = express();
const port = 3000;

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App'
  });
});

app.get('/weather', async (req, res) => {
  const { country, state, city } = req.query;
  const apiKey = '';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    res.render('weather', {
      title: 'Weather Report',
      weatherData: weatherData
    });
  } catch (error) {
    res.status(500).send('Error fetching weather data');
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
