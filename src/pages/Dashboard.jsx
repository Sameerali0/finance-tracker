import { useState, useEffect } from "react";
import Balance from "../Balance";
import TransactionForm from "../TransactionForm";
import TransactionList from "../TransactionList";
import CategoryFilter from "../CategoryFilter";
import MonthFilter from "../MonthFilter";

function App() {

  const [transactions, setTransactions] = useState(() =>{

      const saved = localStorage.getItem("transactions")
      return saved ? JSON.parse(saved):[];
  })

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedMonth, setSelectedMonth] = useState("All")

  useEffect(()=>{
      localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  function deleteTransaction(id){
      
      const updatedTransactions = transactions.filter(
        (item)=> item.id !== id
      )
      
      setTransactions(updatedTransactions)
  }

  
  const filteredTransactions= transactions.filter((item) =>{

      const categoryMatch= selectedCategory=== "All" || item.category === selectedCategory
      const monthMacth= selectedMonth=== "All" || (item.date && item.date.split("-")[1] === selectedMonth)

      return categoryMatch && monthMacth

  })
   
  console.log(transactions)
  
  console.log(selectedCategory)
  

  return (
      <div className="main-container">
        <h1>Finance Tracker</h1>
        <Balance transactions={transactions}/>
        <TransactionForm transactions={transactions} setTransactions={setTransactions}/>
        <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <MonthFilter selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth}/>
        <TransactionList transactions={filteredTransactions} deleteTransaction={deleteTransaction}/>
      </div>
  )
}

export default App
