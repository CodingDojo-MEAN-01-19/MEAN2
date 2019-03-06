const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
  console.log('hitting catch-all');
  response.sendFile(path.join(__dirname, '../../dist/public/index.html'));
});

module.exports = router;
