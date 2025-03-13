import loanRepository from "../repositories/loan.repository.js";

async function createLoanService(userId, bookId, dueDate) {
  const createdLoan = await loanRepository.createLoanRepository(
    userId,
    bookId,
    dueDate
  );
  if (!createdLoan) throw new Error("Error creating Loan");
  return createdLoan;
}

async function findAllLoanService(loanId) {
  const loans = await loanRepository.findAllLoansRepository();
  return loans;
}

async function findLoanByIdService(loanId) {
  const loan = await loanRepository.findLoanByIdRepository(loanId);
  if (!loan) throw new Error("Loan not found");
  return loan;
}

async function deleteLoanService(loanId, userId) {
  const loan = await loanRepository.findLoanByIdRepository(loanId);
  if (!loan) throw new Error("Loan not found");
  if (book.userId !== userId) throw new Error("Unauthorized");
  const response = await loanRepository.deleteLoanRepository(loanId);
  return response;
}

export default {
  createLoanService,
  findAllLoanService,
  findLoanByIdService,
  deleteLoanService,
};
