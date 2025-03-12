import userService from "../services/user.service.js";
import { loginService } from "../services/auth.service.js";

async function createUserController(req, res) {
  const newUser = req.body;

  try {
    const token = userService.createUserService(newUser);
    res.status(201).send({ token });
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function loginUserController(req, res) {
  const { email, password } = req.body;

  try {
    const token = await loginService(email, password);
    res.send(token);
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function findAllUserController(req, res) {
  try {
    const users = await userService.findAllUserService();
    res.send({ users });
  } catch (e) {
    return res.status(404).send(e.message);
  }
}

async function findUserByIdController(req, res) {
  const { id } = req.params;

  try {
    const user = userService.findUserByIdService(id);
    res.send({ user });
  } catch (e) {
    return res.status(404).send(e.message);
  }
}

async function updateUserController(req, res) {
  const { id } = req.params;
  const newUser = req.body;

  try {
    const user = await userService.updateUserService(newUser, id);
    res.send({ user });
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function deleteUserController(req, res) {
  const { id } = req.params;

  try {
    const message = await userService.deleteUserService(id);
    res.send({ message });
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

export default {
  createUserController,
  findAllUserController,
  findUserByIdController,
  updateUserController,
  deleteUserController,
  loginUserController,
};
