import bookController from "../controllers/book.controller.js";
import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  validate,
  validateBookId,
} from "../middlewares/validation.middleware.js";
import { bookSchema } from "../schemas/book.schema.js";

const router = Router();

router.post("/books", bookController.createBookController);

router.get(
  "/books",
  validate(bookSchema),
  authMiddleware,
  bookController.findAllBooksController
);
router.get("/books/search", bookController.searchBooksController);
router.get("/books/:id", validateBookId, bookController.findBookByIdController);
router.patch("/books/:id", validateBookId, bookController.updateBookController);
router.delete(
  "/books/:id",
  validateBookId,
  bookController.deleteBookController
);

export default router;
