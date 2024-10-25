import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const TransactionForm = () => {
  const { setIncome, setExpenses, transactions, setTransactions } =
    useContext(ExpenseContext);
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      type,
      amount: parseFloat(amount),
      category,
      date,
      description,
    };

    setTransactions([...transactions, transaction]);
    if (type === "income") {
      setIncome((prevIncome) => prevIncome + parseFloat(amount));
    } else {
      setExpenses((prevExpenses) => prevExpenses + parseFloat(amount));
    }

    setAmount("");
    setCategory("");
    setDate("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
