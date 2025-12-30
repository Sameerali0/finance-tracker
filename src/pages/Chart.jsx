import { useLocation } from "react-router-dom";
import ExpenseChart from "../charts/ExpenseChart";

function Chart(){

    const {state} = useLocation()
    const transactions = state?.transactions || []

    return(
        <div className="chart-container">
            <ExpenseChart transactions={transactions}/>
        </div>
    )
}

export default Chart