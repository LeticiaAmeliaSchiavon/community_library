import cron from "node-cron";
import moment from "moment";
import sendEmail from "../services/email.service.js";
import loanService from "../repositories/loan.repository.js";
import userRepository from "../repositories/user.repository.js";
import bookRepository from "../repositories/book.repository.js";

cron.schedule("0 9 * * *", async () => {
  console.log("Running daily job to check for due dates...");
  const loans = await loanService.findAllLoansService();
  const today = moment().startOf("day");

  loans.forEach(async (loan) => {
    const dueDate = moment(loan.dueDate).startOf("day");
    const reminderDueDate = moment(dueDate).subtract(1, "days");
    if (today.isSame(reminderDueDate)) {
      sendEmail(loans.email, loans.title, loan.dueDate);
    }
  });
});
