import { useState, useEffect } from "react";
import Balance from "./Balance";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function App() {

  const [transactions, setTransactions] = useState(() =>{

      const saved = localStorage.getItem("transactions")
      return saved ? JSON.parse(saved):[];
  })

  useEffect(()=>{
      localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  return (
      <div className="main-container">
        <h1>Finance Tracker</h1>
        <Balance transactions={transactions}/>
        <TransactionForm transactions={transactions} setTransactions={setTransactions}/>
        <TransactionList transactions={transactions}/>
      </div>
  )
}

export default App
