import Balance from "./Balance";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function App() {
  return (
      <div>
        <h1>Finance Tracker</h1>
        <Balance/>
        <TransactionForm/>
        <TransactionList/>
      </div>
  )
}

export default App
