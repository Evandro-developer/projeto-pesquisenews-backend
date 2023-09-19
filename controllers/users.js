const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const UserNotFoundError = require("../errors/UserNotFoundError");

const getAllUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      if (!users) {
        throw new UserNotFoundError();
      }
      return res.json({ users });
    })
    .catch(next);
};

const getCurrentUser = (req, res, next) => {
  const userId = req.user._id;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        throw new UserNotFoundError("Usuário não encontrado.");
      }
      const formattedUser = {
        name: user.name,
        email: user.email,
      };

      return res.json(formattedUser);
    })
    .catch(next);
};

const createUser = (req, res, next) => {
  const { email, password, name } = req.body;

  bcrypt
    .hash(password, 8)
    .then((hash) =>
      User.create({
        email,
        password: hash,
        name,
      })
    )
    .then((savedUser) => res.json(savedUser))
    .catch(next);
};

const userLogin = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      return res.send({ token });
    })
    .catch(next);
};

module.exports = {
  getAllUsers,
  getCurrentUser,
  createUser,
  userLogin,
};
