import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/",
    element: <div>Hello test!</div>,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
