const my_app = require("./app");

//supertest inside integration test also launches express app
//move app.listen from app.js to server.js
const my_port = 3000;
my_app.listen(my_port, () => {
  console.log("server is now running ...", my_port);
});
