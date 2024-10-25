import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import Chart from "./Chart";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

const Home = () => {
  const { income, expenses, balance } = useContext(ExpenseContext);

  return (
    <div className="container">
      <div className="section">
        <h2>Financial Summary</h2>
        <div className="summary">
          <div className="summary-item">
            <p>Total Income:</p>
            <span>₹{income}</span>
          </div>
          <div className="summary-item">
            <p>Total Expenses:</p>
            <span>₹{expenses}</span>
          </div>
          <div className="summary-item">
            <p>Balance:</p>
            <span>₹{balance}</span>
          </div>
        </div>
      </div>
      <div className="chart-container section">
        <h2>Spending Overview</h2>
        <Chart />
      </div>
      <div className="section">
        <h2>Add Income and Expense</h2>
        <TransactionForm />
      </div>
      <div className="section">
        <h2>Transaction History</h2>
        <TransactionList />
      </div>
    </div>
  );
};

export default Home;
