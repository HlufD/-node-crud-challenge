const CustomError = require("../utils/errors-helpers/custom-error");
const genenarteRandomid = require("../utils/get-random-id");

const create = (req, res, app) => {
  const { body } = req;

  const id = genenarteRandomid();

  body.id = id;

  const db = app.get("db");

  db.push(body);

  return res.status(200).json(body);
};

const findAll = (req, res, app) => {
  return res.status(200).json(app.get("db"));
};

const findOne = (req, res, app) => {
  const { id } = req.params;

  const db = app.get("db");

  const person = db.find((person) => person.id === id);

  if (!person) {
    throw new CustomError(`person with id ${id} was not found`, 404);
  }

  return res.status(200).json(person);
};

const update = (req, res, app) => {
  const { body } = req;

  const { id } = req.params;

  const db = app.get("db");

  const index = db.findIndex((person) => person.id === id);

  if (index == -1) {
    throw new CustomError(`person with id ${id} was not found`, 404);
  }

  body.id = id;

  db[index] = body;

  return res.status(200).json(db[index]);
};

const remove = (req, res, app) => {
  const { id } = req.params;

  const db = app.get("db");

  const index = db.findIndex((person) => person.id === id);

  if (index == -1) {
    throw new CustomError(`person with id ${id} was not found`, 404);
  }

  db.splice(index, 1);
  return res.status(204).end();
};

module.exports = { create, findAll, findOne, update, remove };
