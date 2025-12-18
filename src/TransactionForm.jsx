function TransactionForm() {
    return(
        <form>
            <h2>Add Transaction</h2>

            <input type="text" placeholder=""/>
            <input type="number" placeholder="" />

            <select>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>

            <button>Add</button>
        </form>
    )
    
}

export default TransactionForm