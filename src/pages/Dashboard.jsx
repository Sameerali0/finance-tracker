import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Balance from "../Balance";
import TransactionForm from "../TransactionForm";
import TransactionList from "../TransactionList";
import CategoryFilter from "../CategoryFilter";
import MonthFilter from "../MonthFilter";

function Dashboard() {

  const goTo= useNavigate()

  const [transactions, setTransactions] = useState(() =>{

      const saved = localStorage.getItem("transactions")
      return saved ? JSON.parse(saved):[];
  })

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedMonth, setSelectedMonth] = useState("All")
  const [showForm, setShowForm] = useState(false)
  const [editTransaction, setEditTransaction] = useState(null)

  function closeForm(){

      setShowForm(false)
      setEditTransaction(null)

  }

  useEffect(()=>{
      localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  function deleteTransaction(id){
      
      const updatedTransactions = transactions.filter(
        (item)=> item.id !== id
      )
      
      setTransactions(updatedTransactions)
  }

  function editingTransaction(transaction){

      setEditTransaction(transaction)
      setShowForm(true)
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
        <button className="chart-btn" onClick={() => goTo("/chart")}>View Expense Chart</button>
        <button className="transaction-form-btn" onClick={()=> setShowForm(true)}>+</button>
        {showForm && (
            <div className="transaction-form">
              <div className="transaction-form-card">
                <h2>{editTransaction? "Edit Transaction" : "Add Transaction"}</h2>
                <TransactionForm transactions={transactions} setTransactions={setTransactions} editTransaction={editTransaction} setEditTransaction={setEditTransaction} closeForm={closeForm}/>
              </div>
            </div>
        )}
        <div className="filter-container">
          <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          <MonthFilter selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth}/>
        </div>
        <TransactionList transactions={filteredTransactions} deleteTransaction={deleteTransaction} editingTransaction={editingTransaction}/>
      </div>
  )
}

export default Dashboard
