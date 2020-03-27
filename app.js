const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Cloud Paks with Jenkins!");
});
 
module.exports.app = app;
