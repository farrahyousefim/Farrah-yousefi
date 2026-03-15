import { createBrowserRouter } from "react-router";
import { Home } from "@/app/pages/Home";
import { IAGLCaseStudy } from "@/app/pages/IAGLCaseStudy";
import { RidePreferencesCaseStudy } from "@/app/pages/RidePreferencesCaseStudy";
import { BackstageCaseStudy } from "@/app/pages/BackstageCaseStudy";
import { RideAccessibilityCaseStudy } from "@/app/pages/RideAccessibilityCaseStudy";
import { ErpCaseStudy } from "@/app/pages/ErpCaseStudy";
import { About } from "@/app/pages/About";
import { Blog } from "@/app/pages/Blog";
import { BlogPost } from "@/app/pages/BlogPost";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects/iagl-developer-portal",
    Component: IAGLCaseStudy,
  },
  {
    path: "/projects/ride-preferences",
    Component: RidePreferencesCaseStudy,
  },
  {
    path: "/projects/backstage-home-redesign",
    Component: BackstageCaseStudy,
  },
  {
    path: "/projects/ride-accessibility",
    Component: RideAccessibilityCaseStudy,
  },
  {
    path: "/projects/erp-system",
    Component: ErpCaseStudy,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/blog",
    Component: Blog,
  },
  {
    path: "/blog/:slug",
    Component: BlogPost,
  },
]);
