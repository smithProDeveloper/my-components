import {Route, Routes} from "react-router-dom";
import {MenuScreen, TableScreen, InputScreen, SlideScreen, HeaderScreen, PointOfSaleScreen } from "./routes.ts";

export default function Router() {

    return (
        <Routes>
            <Route path="/" Component={MenuScreen}/>
            <Route path="/table" Component={TableScreen}/>
            <Route path="/input" Component={InputScreen}/>
            <Route path="/sliders" Component={SlideScreen}/>
            <Route path="/headers" Component={HeaderScreen}/>
            <Route path="/point_of_sale" Component={PointOfSaleScreen}/>
        </Routes>
    );
}