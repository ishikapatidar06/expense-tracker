import React, { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [income, setIncome] = useState(
    () => parseFloat(localStorage.getItem("income")) || 0
  );
  const [expenses, setExpenses] = useState(
    () => parseFloat(localStorage.getItem("expenses")) || 0
  );
  const [balance, setBalance] = useState(income - expenses);
  const [transactions, setTransactions] = useState(
    () => JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    localStorage.setItem("income", income);
    localStorage.setItem("expenses", expenses);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    setBalance(income - expenses);
  }, [income, expenses, transactions]);

  return (
    <ExpenseContext.Provider
      value={{
        income,
        expenses,
        balance,
        setIncome,
        setExpenses,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
