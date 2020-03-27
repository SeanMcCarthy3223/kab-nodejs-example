const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Winner's Circle!");
});
 
module.exports.app = app;
