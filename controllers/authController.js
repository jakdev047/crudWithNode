class authController {
  getRegisterPage = (req, res, next) => {
    return res.render("dashboard/register");
  };
}

module.exports = new authController();
