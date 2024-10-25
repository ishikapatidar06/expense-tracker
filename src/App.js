import React from "react";
import Home from "./components/Home";

import ExpenseProvider from "./context/ExpenseContext";

const App = () => {
  return (
    <ExpenseProvider>
      <div>
        <Home />
      </div>
    </ExpenseProvider>
  );
};

export default App;
