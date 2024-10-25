const express = require("express");
const personRouter = require("./src/routes/person.routes");
const notFound = require("./src/utils/errors-helpers/not-found");
const erroHandler = require("./src/middlewares/erro-handler.middleware");
const cors = require("cors");

const app = express();

let persons = [
  {
    id: "1",
    name: "Sam",
    age: "26",
    hobbies: [],
  },
]; //This is your in memory database

app.set("db", persons);
app.use(cors());
app.use(express.json());
app.use("/", personRouter(app));

// error handler middlewares
app.use(notFound);
app.use(erroHandler);

//TODO: Implement crud of person

if (require.main === module) {
  app.listen(3000, () => console.log(`server is runnig on port 3000`));
}
module.exports = app;
