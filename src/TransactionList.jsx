function TransactionList({transactions, deleteTransaction, editingTransaction}) {
    return(
        <div>
            <h2>Transactions</h2>

            {transactions.length === 0 && <p>No transactions here</p> }
            <ul>
                {transactions.map((item)=>(
                    <li key={item.id} className={item.type === "income" ? "income" : "expense"}>
                        {item.text} - Rs {item.amount} - ({item.type}) ({item.category}) - {item.date}
                        <button onClick={()=> editingTransaction(item)}>edit</button>
                        <button onClick={()=> deleteTransaction(item.id)}>del</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TransactionList