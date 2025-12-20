function TransactionList({transactions}) {
    return(
        <div>
            <h2>Transactions</h2>

            {transactions.length === 0 && <p>No transactions here</p> }
            <ul>
                {transactions.map((item)=>(
                    <li key={item.id}>
                        {item.text} --- {item.amount} --- ({item.type})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TransactionList