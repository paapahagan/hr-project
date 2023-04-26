import LoginContainer from "./features/authentication/login/login-container";
import SignUpContainer from "./features/authentication/signup/signup-container";

export function App() {
  return (
    <div className="App">
      <SignUpContainer />
      {/* <LoginContainer /> */}
    </div>
  );
}
