const formidable = require("formidable");
const validator = require("validator");
class authController {
  getRegisterPage = (req, res, next) => {
    return res.render("dashboard/register", { error: "" });
  };

  createRegister = async (req, res, next) => {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
      const { name, email, password } = fields;
      const { image } = files;

      const error = {};

      // validator
      if (validator.isEmpty(name)) {
        error.name = "Please provide your name.";
      }
      if (validator.isEmpty(email)) {
        error.email = "Please provide your email.";
      }
      if (!validator.isEmpty(email) && !validator.isEmail(email)) {
        error.email = "Please provide valid email.";
      }
      if (validator.isEmpty(password)) {
        error.password = "Please provide your password.";
      }
      if (validator.isEmpty(image.originalFilename)) {
        error.image = "Please provide your image.";
      }

      // error length check
      if (Object.keys(error).length > 0) {
        return res.render("dashboard/register", { error });
      } else {
        console.log("Error not found.");
      }

      console.log(error);
    });
  };
}

module.exports = new authController();
