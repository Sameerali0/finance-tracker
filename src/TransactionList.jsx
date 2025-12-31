function TransactionList({transactions, deleteTransaction, editingTransaction}) {
    return(
        <div className="transaction-list-container">
            <h2 className="transaction-heading">Transactions</h2>

            {transactions.length === 0 ? (<p className="no-transacitons">No transactions here</p>): (
            <ul className="transaction-list">
                <li className="transaction-list-header">
                    <span>Title</span>
                    <span>Amount</span>
                    <span>Type</span>
                    <span>Category</span>
                    <span>Date</span>
                    <span>Actions</span>
                </li>

                {transactions.map((item)=>(
                    <li key={item.id} className={item.type === "income" ? "income" : "expense"}>
                        {item.text} - Rs {item.amount} - ({item.type}) ({item.category}) - {item.date}
                            <button className="edit-btn" onClick={()=> editingTransaction(item)}>Edit</button>
                            <button className="delete-btn" onClick={()=> deleteTransaction(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default TransactionList