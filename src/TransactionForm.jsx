import { useState } from "react"

function TransactionForm({transactions, setTransactions}) {

    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("expense")
    const [category, setCategory] = useState("Food")
    const [date, setDate] = useState("")

    function addTransaction(e) {
        e.preventDefault()

        if (!text || !amount) {
            
            return
        }

        const newTransaction ={

            id: Date.now(),
            text,
            amount: Number(amount),
            type,
            category,
            date,
            
        }

        setTransactions([newTransaction, ...transactions])

        setText("")
        setAmount("")

    }

    return(
        <div>
        <h2>Add Transaction</h2>
        <form onSubmit={addTransaction}>
            <input type="text" placeholder="Enter description" value={text} onChange={(e)=> setText(e.target.value)}/>
            <input type="number" placeholder="Enter amount" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
            <input type="date" value={date} onChange={(e)=> setDate(e.target.value)}/>

            <select value={type} onChange={(e)=> setType(e.target.value)}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Food">Food</option>
                <option value="Shopping">Shopping</option>
                <option value="Rent">Rent</option>
                <option value="Salary">Salary</option>
                <option value="Traveling">Traveling</option>
                <option value="Other">Other</option>
            </select>

            <button>Add</button>
        </form>
        </div>
    )
    
}

export default TransactionForm