const express = require('express');
const moment = require('moment-timezone');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
  res.send(`Current time: ${currentTime}`);
});

app.get('/worldclock/:timezone', (req, res) => {
  const { timezone } = req.params;
  const time = moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss');
  res.send(`Time in ${timezone}: ${time}`);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
