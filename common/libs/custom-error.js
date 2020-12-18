function CustomError({ message, errors }) {
  this.name = "Custom Error";
  this.message = message;
  this.errors = errors;
}

CustomError.prototype = Error.prototype;

module.exports = CustomError;
