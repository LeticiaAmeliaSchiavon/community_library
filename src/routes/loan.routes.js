import { Router } from "express";
import loanController from "../controllers/loan.controller.js";
import {
  validate,
  validateLoanId,
} from "../middlewares/validation.middleware.js";
import { loanSchema } from "../schemas/loan.schema.js";

const router = Router();

router.post(
  "/loans",
  validate(loanSchema),
  loanController.createLoanController
);
router.get("/loans", loanController.findAllLoansController);
router.get("/loans/:id", validateLoanId, loanController.findLoanByIdController);
router.delete(
  "/loans/:id",
  validateLoanId,
  loanController.deleteLoanController
);

export default router;
