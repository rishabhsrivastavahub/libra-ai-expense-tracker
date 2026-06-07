import React from "react";
import {
 BrowserRouter,
 Routes,
 Route,
 Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
 return (
   <AuthProvider>
     <BrowserRouter>
       <Navbar />

       <div className="container mt-4">
         <Routes>
           <Route
             path="/"
             element={
               <PrivateRoute>
                 <Dashboard />
               </PrivateRoute>
             }
           />

           <Route
             path="/login"
             element={<Login />}
           />

           <Route
             path="/register"
             element={<Register />}
           />

           <Route
             path="*"
             element={<Navigate to="/" />}
           />
         </Routes>
       </div>

       <ToastContainer
  position="top-right"
  autoClose={2500}
  theme="colored"
/>
     </BrowserRouter>
   </AuthProvider>
 );
}

<ToastContainer
  position="top-right"
  autoClose={2500}
  theme="colored"
/>

export default App;
