import { useNavigate } from "react-router-dom";
import ExpenseChart from "../charts/ExpenseChart";

function Chart(){

    const goTo= useNavigate()
    const transactions = JSON.parse( localStorage.getItem("transactions")) || []

    return(
        <div className="chart-container">
            <button className="back-btn" onClick={()=> goTo(-1)}>Back</button>
            <ExpenseChart transactions={transactions}/>
        </div>
    )
}

export default Chart