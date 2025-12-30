import { useNavigate } from "react-router-dom"

function Welcome(){

    const goTo= useNavigate()

    return(
        <div className="welcome-container">
            <div className="welcome-card">
                <h1>Finance Tracker</h1>
                <p>Track your income and expences easily</p>
                <button onClick={()=> goTo("/loading")}>Start</button>
            </div>    
        </div>
    )
}

export default Welcome