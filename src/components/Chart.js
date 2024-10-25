import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ExpenseContext } from "../context/ExpenseContext";


ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const { income, expenses, balance } = useContext(ExpenseContext);

  const data = {
    labels: ["Income", "Expenses", "Balance"],
    datasets: [
      {
        data: [income, expenses, balance],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default Chart;
