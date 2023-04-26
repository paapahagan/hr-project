import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Login from "./login-component";
import { login } from "../../../firebase_setup/firebase";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

function LoginContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data) => {
    try {
      await login(data.email, data.password);
      reset();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Login
      handleSubmit={handleSubmit(onSubmitHandler)}
      register={register}
      errors={errors}
      errorMessage={errorMessage}
    />
  );
}

export default LoginContainer;
