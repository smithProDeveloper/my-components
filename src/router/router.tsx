import {Route, Routes} from "react-router-dom";
import {MenuScreen, TableScreen, InputScreen} from "./routes.ts";

export default function Router() {

    return (
        <Routes>
            <Route path="/" Component={MenuScreen}/>
            <Route path="/table" Component={TableScreen}/>
            <Route path="/input" Component={InputScreen}/>
        </Routes>
    );
}