import {Route, Routes} from "react-router-dom";
import {MenuScreen} from "./routes.ts";

export default function Router() {

    return (
        <Routes>
            <Route path="/" Component={MenuScreen}/>
        </Routes>
    );
}