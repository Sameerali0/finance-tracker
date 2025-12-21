function Balance({ transactions }) {

    const income= transactions
      .filter((trans)=> trans.type === "income")
      .reduce((total, trans) => total + trans.amount, 0)

    const expense= transactions
      .filter((trans) =>trans.type === "expense")
      .reduce((total, trans) =>total + trans.amount, 0)

    const balance= income - expense

    return(
        <div className="balance-container">
          <h2>Balance</h2>
          <p className="balance"> Rs: {balance}</p>
          <div className="income-expense-container">
            <div className="income">
              <h3>Income</h3>
              <p>Rs: {income}</p>
            </div>

            <div className="expense">
              <h3>Expense</h3>
              <p>Rs: {expense}</p>
            </div>
          </div>
        </div>
    )
    
}

export default Balance