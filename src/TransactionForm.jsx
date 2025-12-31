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
        <div className="transaction-form-container">
        <form className="form" onSubmit={addTransaction}>

            <div className="input-label">
                <label>Tittle</label>
                <input type="text" placeholder="Enter description" value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
            <div className="input-label">
                <label>Amount</label>
                <input type="number" placeholder="Enter amount" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
            </div>
            <div className="input-label">
                <label>Date</label>
                <input type="date" value={date} onChange={(e)=> setDate(e.target.value)}/>
            </div>

            <div className="type-category">
                <div className="type">
                    <label>Type</label>
                    <select value={type} onChange={(e)=> setType(e.target.value)}>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>

                <div className="category">
                    <label>Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Food">Food</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Rent">Rent</option>
                        <option value="Salary">Salary</option>
                        <option value="Traveling">Traveling</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <button className="transaction-add-btn">Add Transaction</button>
        </form>
        </div>
    )
    
}

export default TransactionForm