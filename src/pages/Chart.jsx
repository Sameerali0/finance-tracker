import ExpenseChart from "../charts/ExpenseChart";

function Chart({transactions}){

    return(
        <div className="chart-container">
                <ExpenseChart transactions={transactions}/>
        </div>
    )
}

export default Chart