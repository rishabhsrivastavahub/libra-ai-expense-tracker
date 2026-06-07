import React from "react";
import API from "../services/api";
import {
  toast,
} from "react-toastify";

const ExpenseList = ({
 expenses,
 loadExpenses,
 onEdit,
}) => {
 const handleDelete = async (
   id
 ) => {
   const confirmDelete =
     window.confirm(
       "Are you sure you want to delete this expense?"
     );

   if (!confirmDelete) return;

   try {
     await API.delete(
       `/expenses/${id}`
     );

    //  alert(
    //    "Expense Deleted"
    //  );

    toast.success(
  "Transaction Deleted!"
);

     loadExpenses();
   } catch (err) {
     alert(
       err.response?.data
         ?.message ||
         "Delete Failed"
     );
   }
 };

 if (
   !expenses ||
   expenses.length === 0
 ) {
   return (
     <div className="card shadow-sm mt-4">
       <div className="card-body text-center">
         <h5>
           No Expenses Found
         </h5>
       </div>
     </div>
   );
 }

 return (
   <div className="card shadow-sm mt-4">

     <div className="card-body">

       {/* <h3 className="mb-3">
         Expense History
       </h3> */}

       <div className="table-responsive">

         <table className="table table-striped table-hover align-middle">

           <thead className="table-dark">
             <tr>
               <th>Title</th>
               <th>Type</th>
              <th>Amount</th>
              <th>Category</th>
               <th>Date</th>
               <th>Description</th>
               <th width="170">
                 Actions
               </th>
             </tr>
           </thead>

           <tbody>

             {expenses.map(
               (expense) => (
                 <tr
                   key={
                     expense._id
                   }
                 >
                   <td>
                     {
                       expense.title
                     }
                   </td>

                   <td>

  <span
    className={`badge ${
      expense.type ===
      "Income"
        ? "bg-success"
        : "bg-danger"
    }`}
  >
    {expense.type}
  </span>

</td>

<td>
  {expense.type ===
  "Income"
    ? "+₹"
    : "-₹"}
  {expense.amount}
</td>

<td>

  <span className="badge bg-primary">
    {expense.category}
  </span>

</td>

                   <td>
                     {new Date(
                       expense.date
                     ).toLocaleDateString()}
                   </td>

                   <td>
                     {
                       expense.description
                     }
                   </td>

                   <td>

                     <button
                       className="btn btn-warning btn-sm me-2"
                       onClick={() =>
                         onEdit &&
                         onEdit(
                           expense
                         )
                       }
                     >
                       Edit
                     </button>

                     <button
                       className="btn btn-danger btn-sm"
                       onClick={() =>
                         handleDelete(
                           expense._id
                         )
                       }
                     >
                       Delete
                     </button>

                   </td>

                 </tr>
               )
             )}

           </tbody>

         </table>

       </div>

     </div>

   </div>
 );
};

export default ExpenseList;
