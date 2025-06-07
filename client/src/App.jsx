import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element : <RootLayout/>,
    children : [
      {
        path : "/",
        element : <HomePage/>
      },
    ]
   
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {

  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
