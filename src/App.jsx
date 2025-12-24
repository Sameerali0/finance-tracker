import {Routes, Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Loading from "./pages/Loading";
import Dashboard from "./pages/Dashboard";

function App(){
    return(
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/app" element={<Dashboard />} />
        </Routes>
    )

}

export default App
