import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Usersignup from "./components/Usersignup";
import JobDesc from "./components/JobDesc";
import Apply from "./components/Apply";
import Layout from "./components/Layout";
import Logged from "./components/Logged";
import Emplsignup from "./components/Emplsignup";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Empllogin from "./components/Empllogin";
import EmplHiring from "./components/EmplHiring";
import LiveInterview from "./components/LiveInterview";
import Resume from "./components/Resume";
import DigiLockerVerification from "./components/DigiLockerVerification";
import Jobposting from "./components/Jobposting";
import ApplicantsList from "./components/ApplicantsList";
import SupportHelp from "./components/SupportHelp";
import Remarks from "./components/Remarks";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/candidate",
    element: (
      <Layout>
        <Usersignup />
      </Layout>
    ),
  },
  {
    path: "/jobdesc",
    element: (
      <Layout>
        <JobDesc />
      </Layout>
    ),
  },
  {
    path: "/apply",
    element: (
      <Layout>
        <Apply />
      </Layout>
    ),
  },
  {
    path: "/logged",
    element: (
      <Layout>
        <Logged />
      </Layout>
    ),
  },
  {
    path: "/employer",
    element: (
      <Layout>
        <Emplsignup />
      </Layout>
    ),
  },
  {
    path: "/employer-login",
    element: (
      <Layout>
        <Empllogin />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <AboutUs />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/services",
    element: (
      <Layout>
        <Resume />
      </Layout>
    ),
  },
  {
    path: "/employer-hiring",
    element: (
      <Layout>
        <EmplHiring />
      </Layout>
    ),
  },
  {
    path: "/verifydoc",
    element: (
      <Layout>
        <DigiLockerVerification />
      </Layout>
    ),
  },
  {
    path: "/interview",
    element: (
      <Layout>
        <LiveInterview />
      </Layout>
    ),
  },
  {
    path: "/jobposts",
    element: (
      <Layout>
        <Jobposting />
        <Jobposting />
      </Layout>
    ),
  },
  {
    path: "/view",
    element: (
      <Layout>
        <ApplicantsList />
      </Layout>
    ),
  },
  {
    path: "/support",
    element: (
      <Layout>
        <SupportHelp />
      </Layout>
    ),
  },
  {
    path: "/remarks",
    element: (
      <Layout>
        <Remarks />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
