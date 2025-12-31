import { useEffect, useState } from "react"

function TransactionForm({transactions, setTransactions, editTransaction, setEditTransaction, closeForm}) {

    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("expense")
    const [category, setCategory] = useState("Food")
    const [date, setDate] = useState("")

    useEffect(()=>{
        if(editTransaction){

            setText(editTransaction.text)
            setAmount(editTransaction.amount)
            setType(editTransaction.type)
            setCategory(editTransaction.category)
            setDate(editTransaction.date)

        }
    }, [editTransaction])

    function addTransaction(e) {
        e.preventDefault()

        if (!text || !amount) {
            
            return
        }

        if(editTransaction){
            const updatedTransactions= transactions.map(item => item.id === editTransaction.id 
                ? { ...editTransaction, text, amount: Number(amount), type, category, date}
                : item    

            )

            setTransactions(updatedTransactions)
            setEditTransaction(null)

        }else{
            const newTransaction ={

                id: Date.now(),
                text,
                amount: Number(amount),
                type,
                category,
                date,
                
            }

            setTransactions([newTransaction, ...transactions])
        }

        setText("")
        setAmount("")
        setType("expense")
        setCategory("Food")
        setDate("")

        closeForm()

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

            <div className="form-btns">
                <button className="transaction-add-btn">{editTransaction ? "Update Transaction" : "Add Transaction"}</button>
                <button className="cancel-btn" type="button" onClick={closeForm}>Cancel</button>
            </div>    
        </form>
        </div>
    )
    
}

export default TransactionForm