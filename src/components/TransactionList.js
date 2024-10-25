import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const TransactionList = () => {
  const { transactions, setTransactions, setIncome, setExpenses } =
    useContext(ExpenseContext);

  const handleDelete = (index) => {
    const updatedTransactions = [...transactions];
    const removedTransaction = updatedTransactions.splice(index, 1)[0];

    if (removedTransaction.type === "income") {
      setIncome((prevIncome) => prevIncome - removedTransaction.amount);
    } else {
      setExpenses((prevExpenses) => prevExpenses - removedTransaction.amount);
    }

    setTransactions(updatedTransactions);
  };

  return (
    <div>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date} - {transaction.category} -{" "}
            {transaction.type === "income" ? "+" : "-"}₹{transaction.amount}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
