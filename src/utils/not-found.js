const notFound = (req, res) => {
  res.status(404).json({
    status: 404,
    path: req.path,
    message: "404,Not found",
  });
};

module.exports = notFound;
