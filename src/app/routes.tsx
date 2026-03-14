import { createBrowserRouter } from "react-router";
import { Home } from "@/app/pages/Home";
import { IAGLCaseStudy } from "@/app/pages/IAGLCaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects/iagl-developer-portal",
    Component: IAGLCaseStudy,
  },
]);
