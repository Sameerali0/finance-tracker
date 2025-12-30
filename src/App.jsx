import {Routes, Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Loading from "./pages/Loading";
import Dashboard from "./pages/Dashboard";
import Chart from "./pages/Chart";

function App(){
    return(
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/app" element={<Dashboard />} />
            <Route path="/chart" element={<Chart />} />
        </Routes>
    )

}

export default App
