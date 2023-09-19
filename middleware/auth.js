const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const UnauthorizedError = require("../errors/UnauthorizedError");

dotenv.config();

const { NODE_ENV, JWT_SECRET, DEV_JWT_SECRET } = process.env;

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new UnauthorizedError("Não autorizado");
  }

  if (NODE_ENV === "production" && !JWT_SECRET) {
    throw new UnauthorizedError("JWT_SECRET deve ser definido em produção");
  }

  const token = authorization.replace("Bearer ", "");

  const secretKey = NODE_ENV === "production" ? JWT_SECRET : DEV_JWT_SECRET;

  try {
    const payload = jwt.verify(token, secretKey);

    req.user = payload;
  } catch (err) {
    console.error("Error during JWT verification:", err);
    throw new UnauthorizedError("Não autorizado");
  }
  console.log("Usuário autenticado:", req.user);
  next();
};

module.exports = auth;
