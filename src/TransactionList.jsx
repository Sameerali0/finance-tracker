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
                    <li key={item.id} className={`transaction-item ${item.type === "income" ? "income" : "expense"}`}>
                        <span>{item.text}</span>
                        <span> Rs {item.amount}</span>
                        <span>({item.type})</span>
                        <span>({item.category})</span>
                        <span>{item.date}</span>
                        <div className="list-btns">
                            <button className="edit-btn" onClick={()=> editingTransaction(item)}>Edit</button>
                            <button className="delete-btn" onClick={()=> deleteTransaction(item.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default TransactionList