import { useState } from "react";
import Balance from "./Balance";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function App() {

  const [transactions, setTransactions] = useState([])

  return (
      <div>
        <h1>Finance Tracker</h1>
        <Balance transactions={transactions}/>
        <TransactionForm transactions={transactions} setTransactions={setTransactions}/>
        <TransactionList transactions={transactions}/>
      </div>
  )
}

export default App
