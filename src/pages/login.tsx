import LoginForm from "@/layout/LoginForm";
import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";
import React from "react";

const login = () => {
  return (
    <Main meta={<Meta title="MERN | Login" description="Login page" />}>
      <LoginForm />
    </Main>
  );
};

export default login;
