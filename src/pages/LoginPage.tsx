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
      <Login onSubmit={ handleLoginSubmit } />
    </div>
  );
};

export default LoginPage;