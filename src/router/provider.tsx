import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../auth/pages/login";
import Dashboard from '../dashboard/pages/index'
import Privates from "../dashboard/pages/private";

const BrowserProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Privates />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/auth" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default BrowserProvider