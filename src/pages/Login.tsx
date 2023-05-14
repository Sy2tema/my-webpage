import React, { useState } from "react";
import { User } from "types/types";
  
interface LoginProps {
    onSubmit: (formData: User) => void;
}

const Login = (props: LoginProps) => {
    const [loginForm, setLoginForm] = useState<User>({
        email: '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(`로그인 폼 작성 완료 ${ FormData }`)
        setLoginForm({ email: '', password: '' });
    };

    return (
        <div>
            <h1>로그인</h1>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={ loginForm.email }
                        onChange={ handleInputChange }
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={ loginForm.password }
                        onChange={ handleInputChange }
                    />
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};  

export default Login;