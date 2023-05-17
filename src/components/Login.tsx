import React, { useState } from "react";
import { User } from "types/types";

interface LoginProps {
  onSubmit: (formData: User) => void;
}

const Login = (props: LoginProps) => {
  const [loginForm, setLoginForm] = useState<User>({
    email: "",
    password: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("로그인 폼 작성 완료", loginForm.email, loginForm.password);
    setLoginForm({ email: "", password: "" });

    // Pass the form data to the parent component
    props.onSubmit(loginForm);
  };

  return (
    <div id="login">
      <h1 id="login-title">로그인</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <input
            type="email"
            name="email"
            className="login-form-inner"
            value={ loginForm.email }
            onChange={ handleInputChange }
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            className="login-form-inner"
            value={ loginForm.password }
            onChange={ handleInputChange }
          />
        </div>
        <button type="submit" id="login-button">
          로그인
        </button>
        <button type="submit" id="login-button">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Login;