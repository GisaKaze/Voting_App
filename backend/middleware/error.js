const ErrorResponse = require("../utils/errorResponse");
const ErrorHandler = (err, req, res, next) => {
  let error = err;
  console.log("Error:" + "  " + err);

  //mongoose bad objectId
  if (error.name === "CastError") {
    const message = `resource not found with id of ${error.value}`;
    error = new ErrorResponse(message, 404);
  }

  //Mongoose duplicate key
  if (error.code === 11000) {
    const message = "duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (error.name === "ValidationError") {
    const message = Object.values(error.errors).map((val) => val.message);
    error = new ErrorResponse(message[0], 400);
  }

  return res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};
module.exports = ErrorHandler;
