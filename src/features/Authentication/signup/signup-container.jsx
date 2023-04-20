import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SignUpComponent from "./signup-component";

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
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <div>
      <SignUpComponent
        handleSubmit={handleSubmit(onSubmitHandler)}
        register={register}
        errors={errors}
        isValid={isValid}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

export default SignUpContainer;
