import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginContainer from "./features/authentication/login/login-container";
import SignUpContainer from "./features/authentication/signup/signup-container";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
      </div>
    ),
  },
  {
    path: "/login",
    element: <LoginContainer />,
  },
  {
    path: "/signup",
    element: <SignUpContainer />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
