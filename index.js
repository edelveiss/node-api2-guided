//
// if you're happy and you know it...
//
const server = require("./server.js");

//
//
// we moved the code that creates the express application, and put it in
// server.js. In this file, we just "require" it, then start the application
// listening.
//
// we moved all of our route handlers and other middleware to "router" files.
//
// this helps us to organize our code better, allowing for easier expansion and
// troubleshooting, and collaborating with other developers.
//
//
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});

//===================================================
// const express = require("express");

// //const Hubs = require('./hubs/hubs-model.js');
// const hubsRouter = require("./hubs/hubs-router");
// const welcomeRouter = require("./welcome/welcome-router");

// const server = express();

// server.use(express.json());
// server.use("/api/hubs", hubsRouter);
// server.use("/something/anything", hubsRouter);
// server.use(welcomeRouter);

// // add an endpoint that returns all the messages for a hub
// // add an endpoint for adding new message to a hub

// server.listen(5000, () => {
//   console.log("\n*** Server Running on http://localhost:5000 ***\n");
// });
