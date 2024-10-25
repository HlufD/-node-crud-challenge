const express = require("express");
const {
  findAll,
  create,
  findOne,
  update,
  remove,
} = require("../controllers/person.controller");
const validationMiddleware = require("../middlewares/validation.middleware");
const PersonSchema = require("../schemas/person.schema");

const router = express.Router();

module.exports = (app) => {
  router
    .route("/person")
    .get((req, res) => findAll(req, res, app))
    .post(validationMiddleware(PersonSchema), (req, res) =>
      create(req, res, app)
    );

  router
    .route("/person/:id")
    .get((req, res) => findOne(req, res, app))
    .put(validationMiddleware(PersonSchema), (req, res) =>
      update(req, res, app)
    )
    .delete((req, res) => remove(req, res, app));

  return router;
};
