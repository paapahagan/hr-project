import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginContainer from "./features/authentication/login/login-container";
import SignUpContainer from "./features/authentication/signup/signup-container";
import Compose from "./features/messages/compose-component";
import Message from "./features/messages/message-component";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Message />
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
  // {
  //   path: "/compose",
  //   element: <compose/>,
  // },
]);

export function App() {
  return <RouterProvider router={router} />;
}
