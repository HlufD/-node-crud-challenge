const erroHandler = (err, req, res, next) => {
  return res.status(err.status || 500).json({
    status: err.status === 500 || !err.status ? 500 : err.status,
    message:
      err.status === 500 || !err.status ? "Internal server error" : err.message,
  });
};

module.exports = erroHandler;
