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
            <LoginPage onSubmit={ HandleLoginSubmit } />
        </div>
    );
};

export default HomePage;