const express = require('express');
const path = require('path');
const RateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 8080;

const limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

app.use(limiter);
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
