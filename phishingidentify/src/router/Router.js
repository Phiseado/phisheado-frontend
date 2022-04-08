import { Routes, Route } from "react-router-dom";
import AnalyseMessage from "../components/AnalyseMessage";
import Home from "../components/Home";
import Statistics from "../components/Statistics";

const Router = () => (
    <Routes>
        <Route
            path="/home"
            element={<Home />}
        >
        </Route>
        <Route
            path="/analyse"
            element={<AnalyseMessage />}
        >
        </Route>
        <Route
            path="/statistics"
            element={<Statistics />}
        >
        </Route>
        <Route
            path="*"
            element={<Home />}
        ></Route>
    </Routes>
)

export default Router;