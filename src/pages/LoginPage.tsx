import React from "react";
import Login from "components/Login";
import { User } from "types/types";

interface LoginPageProps {
    onSubmit: (formData: User) => void;
}

const LoginPage: React.FC<LoginPageProps> = (props: LoginPageProps) => {
  const handleLoginSubmit = (formData: User) => {
    props.onSubmit(formData);
  };

  return (
    <div>
      <h1>로그인 페이지 입니다.</h1>
      <Login onSubmit={ handleLoginSubmit } />
    </div>
  );
};

export default LoginPage;