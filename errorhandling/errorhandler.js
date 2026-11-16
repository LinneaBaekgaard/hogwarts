// custom error beskeder:

export default (err, req, res, next) => {
  console.log(err.message);

  let statusCode = err.statusCode || 500;
  let error = err.error || "internal server error";
  let message = err.message || "something went wrong";

  if (err.statusCode == 404) {
    error = "not found";
  } else if (err.statusCode == 400) {
    error = "bad request";
  }
  res.status(statusCode).json({
    message: message,
    error: error,
    statusCode: statusCode,
  });
};