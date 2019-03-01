const server = require('./server.js');

const port = 3200;
server.listen(port, function() {
     console.log(`\n === Running on port ${port} ===\n`);
})