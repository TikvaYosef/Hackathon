import { BrowserRouter, Routes, Route} from "react-router-dom";
import {LoginPage} from "./components/pages/LoginPage/LoginPage";
import {Footer} from "./components/layout/Footer/Footer";
import SideBar from "./components/layout/SideBar/SideBar"
import Workspace from "./components/pages/WorkspacePage/Workspace.component";
import AddProcess from "./components/features/Processes/Add-process.component";


const AppRouter = () => {


    return (
        <BrowserRouter>
            <SideBar/>
            <Routes>
                <Route exact path="/Workspace" element={<Workspace />} />
                <Route exact path="/AddProcess" element={<AddProcess />} />
                <Route exact path="/" element={<LoginPage />} />

            </Routes >

                <Footer/>
        </BrowserRouter>
    )
}
export default AppRouter;

