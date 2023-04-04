import React from 'react'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Login from './Login';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

function LoginComponent() {

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      resolver: yupResolver(schema),
    });

    const onSubmitHandler = (data) => {
      console.log({ data });
      reset();
    };


  return (
    <Login 
            onSubmit={handleSubmit(onSubmitHandler)}
            email = {...register("email")}
            password =  {...register("password")}
            errors = {errors}
   />
  );
}

export default LoginComponent