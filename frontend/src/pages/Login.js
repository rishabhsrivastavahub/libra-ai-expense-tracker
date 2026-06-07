import React, {
 useState,
 useContext,
} from "react";

import {
 useNavigate,
 Link,
} from "react-router-dom";

import API from "../services/api";

import {
 AuthContext,
} from "../context/AuthContext";

const Login = () => {
 const navigate =
   useNavigate();

 const { login } =
   useContext(AuthContext);

 const [formData, setFormData] =
   useState({
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
     const res =
       await API.post(
         "/auth/login",
         formData
       );

     login(
       res.data.token
     );

     navigate("/");
   } catch (err) {
     alert(
       err.response?.data
         ?.message ||
         "Login Failed"
     );
   }
 };

 return (
   <div className="row justify-content-center">
     <div className="col-md-5">

       <div className="card p-4">

         <h2 className="mb-4">
           Login
         </h2>

         <form
           onSubmit={
             handleSubmit
           }
         >
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

           <button className="btn btn-success w-100">
             Login
           </button>

         </form>

         <p className="mt-3">
           New User?
           <Link
             to="/register"
           >
             {" "}
             Register
           </Link>
         </p>

       </div>

     </div>
   </div>
 );
};

export default Login;
