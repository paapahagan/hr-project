import React from "react";

function SignUpComponent(props) {
  return (
    <div>
      <form
        onSubmit={props.handleSubmit}
        className="grid content-center min-h-screen px-10 py-10 bg-orange-50 lg:grid justify-items-center"
      >
        <div className="container bg-white shadow-md rounded-2xl grid justify-items-center p-10 md:w-3/4  lg:max-w-xl ">
          <div className="mt-5">
            <h2 className=" text-center text-3xl font-bold ">Sign Up</h2>
            <p className=" text-xl mt-3">Welcome back !</p>
          </div>

          <div className="container px-5 py-5 md:px-20 lg:px-10  lg:py-14">
            <div className=" grid ">
              <input
                {...props.register("name")}
                placeholder="Name"
                type="text"
                required
                className="border border-slate-400 focus:ring focus:ring-orange-500 focus:outline-none rounded-lg px-5 lg: py-2"
              />
            </div>

            <div className=" grid mt-5 lg:mt-10 ">
              <input
                {...props.register("email")}
                placeholder="Email"
                type="text"
                required
                className="border border-slate-400 focus:ring focus:ring-orange-500 focus:outline-none rounded-lg px-5 lg: py-2"
              />
              <p>{props.errors.email?.message}</p>
            </div>
            <div className="grid mt-5 lg:mt-10 ">
              <input
                {...props.register("password")}
                placeholder="Password"
                type="password"
                required
                className="border border-slate-400 focus:ring focus:ring-orange-500 focus:outline-none rounded-lg px-5  lg: py-2"
              />
              <p className="text-red-600">{props.errors.password?.message}</p>
            </div>
            <div className=" grid gap-y-5 mt-10 mb-10 lg:mt-16 ">
              <button
                type="submit"
                onClick={() => {
                  props.trigger("email");
                }}
                disabled={!props.isValid || props.isSubmitting}
                className=" bg-orange-500 text-white hover:bg-orange-400 px-20 py-4 rounded-lg disabled:bg-gray-600"
              >
                Sign Up
              </button>
            </div>
            <div className=" mt-20 lg:mt-20 text-center">
              <p className="mt-5">
                Don't have an OA account ?
                <a href="" className="text-orange-600 font-bold ml-5">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-5 text-center text-sm">
          <p className=" text-slate-500">
            By signing up you agree to the{" "}
            <span className=" underline">Terms of Use</span> and{" "}
            <span className="underline"> Privacy Policy</span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUpComponent;
