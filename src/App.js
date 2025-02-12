import React, { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import TransactionChart from "./components/TransactionChart";
import BudgetTracker from "./components/BudgetTracker";
import ThemeToggle from "./components/ThemeToggle";
import ExportCSV from "./components/ExportCSV";

const App = () => {
  const [transactions, setTransactions] = useState(() => JSON.parse(localStorage.getItem("transactions")) || []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="container">
      <h1 className="text-center">💰 Personal Finance Tracker</h1>
      <TransactionChart />
      <ThemeToggle />
      <TransactionForm addTransaction={(t) => setTransactions([...transactions, t])} />
      <TransactionList transactions={transactions} />
      <BudgetTracker transactions={transactions} />
      <ExportCSV transactions={transactions} />
    </div>
  );
};

export default App;
