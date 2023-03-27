const userModel = require("./user-model");

function logger(req, res, next) {
  const method = req.method;
  const url = req.originalUrl;
  const timestamp = new Date().toLocaleString();
  console.log(`${timestamp}--${method}--${url}`);
  next();
}

function sameUserValidation(req, res, next) {
  try {
    const { kullanıcıAdı, şifre } = req.body;
    const sameName = userModel.checkName(kullanıcıAdı);
    if (sameName) {
      res.status(400).json({ message: "Aynı kullanıcı ismi var" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

function validateNewUser(req, res, next) {
  try {
    const { kullanıcıAdı, şifre } = req.body;
    if (!kullanıcıAdı || !şifre) {
      res.status(404).json({ message: "Alanları Doldurunuz" });
      next();
    } else {
      req.user = { kullanıcıAdı: kullanıcıAdı, şifre: şifre };
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { logger, validateNewUser, sameUserValidation };
