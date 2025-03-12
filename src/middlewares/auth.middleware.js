import "dotenv/config";
import jwt, { decode } from "jsonwebtoken";
import userService from "../services/user.service.js";

export function authMiddleware(req, res, next) {
  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) {
    return res.status(401).send({ message: "The token was not informed!" });
  }

  const partsToken = tokenHeader.split(" "); // "Bearer", "token"
  if (partsToken.length !== 2) {
    return res.status(401).send({ message: "Invalid token!" });
  }

  const [schema, token] = partsToken;

  if (!/^Bearer$/i.test(schema)) {
    return res.status(401).send({ message: "Malformatted Token!" });
  }

  jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ message: "Invalid token!", error: err.message });
    }

    const user = await userService.findUserByIdService(decoded.id);
    if (!user || !user.id) {
      return res.status(401).send({ message: "Invalid token!" });
    }

    req.userId = user.id;

    return next();
  });
}
