const express = require("express");
const personRouter = require("./src/routes/person.routes");

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
app.use(express.json());
app.use("/", personRouter(app));

//TODO: Implement crud of person

app.get("/persons", (req, res) => {
  return res.status(200).send(persons);
});

if (require.main === module) {
  app.listen(3000, () => console.log(`server is runnig on port 3000`));
}
module.exports = app;
