import React, { useState } from "react";
import Login from "./Login";
import { User } from "../types/types";

interface HomeProps {
}

const Home = (props: HomeProps) => {
    const HandleLoginSubmit = (formData: User) => {
        console.log('Login form submitted:', formData);
    }

    return (
        <Login onSubmit={ HandleLoginSubmit } />
    );
};

export default Home;