import { useState, useEffect } from "react";
import Balance from "./Balance";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import CategoryFilter from "./CategoryFilter";

function App() {

  const [transactions, setTransactions] = useState(() =>{

      const saved = localStorage.getItem("transactions")
      return saved ? JSON.parse(saved):[];
  })

  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(()=>{
      localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  function deleteTransaction(id){
      
      const updatedTransactions = transactions.filter(
        (item)=> item.id !== id
      )
      
      setTransactions(updatedTransactions)
  }

  const filteredTransactions= selectedCategory ==="All" ? transactions : transactions.filter(
                                                                              (item) => item.category === selectedCategory
                                                                           )
  console.log(transactions)
  
  console.log(selectedCategory)
  

  return (
      <div className="main-container">
        <h1>Finance Tracker</h1>
        <Balance transactions={transactions}/>
        <TransactionForm transactions={transactions} setTransactions={setTransactions}/>
        <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <TransactionList transactions={filteredTransactions} deleteTransaction={deleteTransaction}/>
      </div>
  )
}

export default App
