import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";

const Register = () => {
 const navigate = useNavigate();

 const [formData, setFormData] =
   useState({
     name: "",
     email: "",
     password: "",
   });

 const handleChange = (e) => {
   setFormData({
     ...formData,
     [e.target.name]:
       e.target.value,
   });
 };

 const handleSubmit = async (
   e
 ) => {
   e.preventDefault();

   try {
     await API.post(
       "/auth/register",
       formData
     );

     alert(
       "Registration Successful"
     );

     navigate("/login");
   } catch (err) {
     alert(
       err.response?.data
         ?.message ||
         "Registration Failed"
     );
   }
 };

 return (
   <div className="row justify-content-center">
     <div className="col-md-5">

       <div className="card p-4">

         <h2 className="mb-4">
           Register
         </h2>

         <form
           onSubmit={
             handleSubmit
           }
         >
           <div className="mb-3">
             <label>
               Name
             </label>

             <input
               className="form-control"
               name="name"
               value={
                 formData.name
               }
               onChange={
                 handleChange
               }
               required
             />
           </div>

           <div className="mb-3">
             <label>
               Email
             </label>

             <input
               type="email"
               className="form-control"
               name="email"
               value={
                 formData.email
               }
               onChange={
                 handleChange
               }
               required
             />
           </div>

           <div className="mb-3">
             <label>
               Password
             </label>

             <input
               type="password"
               className="form-control"
               name="password"
               value={
                 formData.password
               }
               onChange={
                 handleChange
               }
               required
             />
           </div>

           <button className="btn btn-primary w-100">
             Register
           </button>
         </form>

         <p className="mt-3">
           Already have an
           account?
           <Link
             to="/login"
           >
             {" "}
             Login
           </Link>
         </p>

       </div>
     </div>
   </div>
 );
};

export default Register;
