function Balance({ transactions }) {

    const income= transactions
      .filter((trans)=> trans.type === "income")
      .reduce((total, trans) => total + trans.amount, 0)

    const expense= transactions
      .filter((trans) =>trans.type === "expense")
      .reduce((total, trans) =>total + trans.amount, 0)

    const balance= income - expense

    return(
        <div>

          <h2>Balance</h2>
          <p>Total: {balance}</p>
          <p>Income: {income}</p>
          <p>Expense: {expense}</p>

        </div>
    )
    
}

export default Balance