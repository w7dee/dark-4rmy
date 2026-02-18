import { createHashRouter } from "react-router-dom"
import Shell from "./ui/Shell"
import Intro from "./pages/Intro"
import Home from "./pages/Home"
import DFIRHub from "./pages/DFIRHub"
import Team from "./pages/Team"
import Sessions from "./pages/Sessions"

export const router = createHashRouter([
  { path: "/", element: <Intro /> },
  {
    path: "/app",
    element: <Shell />,
    children: [
      { path: "home", element: <Home /> },
      { path: "dfir-hub", element: <DFIRHub /> },
      { path: "team", element: <Team /> },
      { path: "sessions", element: <Sessions /> },
    ],
  },
])
