import { useState } from "react"

function TransactionForm({transactions, setTransactions}) {

    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("expense")

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

            <select value={type} onChange={(e)=> setType(e.target.value)}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>

            <button>Add</button>
        </form>
        </div>
    )
    
}

export default TransactionForm