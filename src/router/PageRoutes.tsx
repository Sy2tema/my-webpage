// BrowserRouter는 HTML5 히스토리 API를 사용해 주소를 관리하는 라우터(해쉬뱅모드를 사용하지 않음)
// HashRouter, MemoryRouter 등 다른 라우터 유형 사용 가능
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";

const PageRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/login" element={ <LoginPage /> } />
            </Routes>
        </Router>
    );
};

export default PageRoutes;