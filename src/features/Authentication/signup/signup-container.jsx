import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SignUpComponent from "./signup-component";
import { signup } from "../../../firebase_setup/firebase";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(32)
    .required()
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
});

function SignUpContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, trigger },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data) => {
    try {
      await signup(data.email, data.password);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SignUpComponent
        handleSubmit={handleSubmit(onSubmitHandler)}
        register={register}
        errors={errors}
        isValid={isValid}
        isSubmitting={isSubmitting}
        trigger={trigger}
      />
    </div>
  );
}

export default SignUpContainer;
