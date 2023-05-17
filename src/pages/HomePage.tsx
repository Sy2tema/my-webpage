import React, { useState } from "react";
import { User } from "../types/types";
import LoginPage from "./LoginPage";

interface HomeProps {
}

const HomePage = (props: HomeProps) => {
    const HandleLoginSubmit = (formData: User) => {
        
    }

    return (
        <div>
            <h1>홈 페이지 입니다.</h1>
            <LoginPage onSubmit={ HandleLoginSubmit } />
        </div>
    );
};

export default HomePage;