// login component
function LoginComponent(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="grid content-center min-h-screen px-10 py-10 bg-orange-50 lg:grid justify-items-center"
    >
      <div className="container bg-white shadow-md rounded-2xl grid justify-items-center p-10 md:w-3/4  lg:max-w-xl ">
        <div className="mt-5">
          <h2 className=" text-center text-3xl font-bold ">Sign In</h2>
          <p className=" text-xl mt-3">Welcome back !</p>
        </div>

        <div className="container px-5 py-5 md:px-20 lg:px-10  lg:py-14">
          <div className=" grid ">
            <label>Email</label>
            <input
              {...props.register("email")}
              type="text"
              required
              className="border border-slate-400 focus:ring focus:ring-orange-500 focus:outline-none rounded-lg px-5 lg: py-2"
            />
            <p>{props.errors.email?.message}</p>
          </div>
          <div className="grid mt-5 lg:mt-10 ">
            <label>Password</label>
            <input
              {...props.register("password")}
              type="password"
              required
              className="border border-slate-400 focus:ring focus:ring-orange-500 focus:outline-none rounded-lg px-5  lg: py-2"
            />
            <p className="text-red-600">{props.errors.password?.message}</p>
          </div>
          <div className=" grid gap-y-5 mt-10 lg:mt-16 ">
            <button
              type="submit"
              // disabled={!email}
              className=" bg-orange-500 text-white hover:bg-orange-400 px-20 py-4 rounded-lg lg:"
            >
              Sign Into App
            </button>
          </div>
          <div className="mt-5 lg:mt-10 text-center">
            <p>
              Don't have a ValueBell account ?
              <a href="" className="text-orange-600 font-bold">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginComponent;
