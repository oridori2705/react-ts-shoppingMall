
import { Outlet } from "react-router-dom";
import { Gnb } from "./components/gnb";

const App = () => {
   
    return (
        <div>
            <Gnb/>
            <Outlet />
        </div>
    )
}
export default App;