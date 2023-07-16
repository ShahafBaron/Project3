const express = require("express");
const cors = require("cors");

require("./configs/database");
const getMoviesFromAPI = require("./routers/moviesRouter");
const getMembersFromAPI = require("./routers/membersRouter");

const usersRouter = require("./routers/usersRouter");
const moviesRouter = require("./routers/moviesRouter");
const membersRouter = require("./routers/membersRouter");
const subscriptionsRouter = require("./routers/subscriptionsRouter");

const port = 8000;

getMoviesFromAPI();
console.log("Movies added from API");
getMembersFromAPI();
console.log("Members added from API");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/movies", moviesRouter);
app.use("/api/members", membersRouter);
app.use("/api/subscriptions", subscriptionsRouter);

// Entry Point of the server
app.listen(port, () =>
  console.log(`App is listening at http://localhost:${port}`)
);
