import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home/Home.jsx";
import Signup from "./Pages/Singup/Signup.jsx";
import Login from "./Pages/Login/Login.jsx";
import Layout from "./Layout.jsx";
import AddLocation from "./Pages/Addlocation/Addlocation.jsx";
import LocationPage from "./Pages/LocationPage/LocationPage.jsx";
import Admin from "./Pages/Dashboard/Admin/Admin.jsx";
import AdminProtectedRoute from "./Routes/AdminProtectedRoute.jsx";
import SelectRole from "./components/SelectRole/SelectRole.jsx";
import AdminPage from "./Pages/AdminPage/AdminPage.jsx";
import VolunteerDashboard from "./Pages/VolunteerDashboard/VolunteerDashboard.jsx";
import TrainingPage from "./Pages/TrainingPage/TrainingPage.jsx";
import VolunteerFormPage from "./Pages/VolunteerFormPage/VolunteerFormPage.jsx";
import AdminAuth from "./Pages/adminAuth/AdminAuth.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import CrisisPage from "./Pages/CrisisPage/CrisisPage.jsx";
import TrainingResourcesPage from "./Pages/TrainingResourcesPage/TrainingResourcesPage.jsx";
import Certification from "./Pages/Certification/Certification.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="addyours" element={<AddLocation />} />
      <Route path="selectrole" element={<SelectRole />} />
      <Route path="location/:id" element={<LocationPage />} />
      <Route path="adminAuth" element={<AdminAuth />} />
      <Route path="adminpage" element={<AdminPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="crisis" element={<CrisisPage />} />
      <Route path="volunteer" element={<VolunteerDashboard />} />
      <Route path="training" element={<TrainingPage />} />
      <Route path="certi" element={<Certification />} />
      <Route path="resourcetraining" element={<TrainingResourcesPage />} />
      <Route path="volunteerform" element={<VolunteerFormPage />} />
      <Route
        path="*"
        element={<h1 className="text-center text-4xl mt-10 text-bold"><br></br>404<br></br>Page Not Found</h1>}
      />
      <Route
        path="admin"
        element={
          <AdminProtectedRoute>
            <Admin />
          </AdminProtectedRoute>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
