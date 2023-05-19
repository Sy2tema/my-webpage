// BrowserRouter는 HTML5 히스토리 API를 사용해 주소를 관리하는 라우터(해쉬뱅모드를 사용하지 않음)
// HashRouter, MemoryRouter 등 다른 라우터 유형 사용 가능
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import { User } from "types/types";

const PageRoutes: React.FC = () => {
    const handleLoginFormSubmit = (formData: User) => {
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/login" element={ <LoginPage onSubmit={ handleLoginFormSubmit } /> } />
            </Routes>
        </Router>
    );
};

export default PageRoutes;