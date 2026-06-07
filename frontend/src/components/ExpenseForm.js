// import React, {
//   useState,
//   useEffect,
// } from "react";

// import API from "../services/api";
// import {
//   toast,
// } from "react-toastify";

// const initialState = {
//   title: "",
//   amount: "",
//   type: "Expense",
//   category: "Food",
//   date: new Date()
//     .toISOString()
//     .split("T")[0],
//   description: "",
// };

// const ExpenseForm = ({
//   loadExpenses,
//   editingExpense,
//   setEditingExpense,
// }) => {
//   const [expense, setExpense] =
//     useState(initialState);

//   const [loading, setLoading] =
//     useState(false);

//   const categories = [
//     "Food",
//     "Travel",
//     "Shopping",
//     "Bills",
//     "Medical",
//     "Entertainment",
//     "Others",
//   ];

//   useEffect(() => {
//     if (editingExpense) {
//       setExpense({
//   title:
//     editingExpense.title ||
//     "",
//   amount:
//     editingExpense.amount ||
//     "",
//   type:
//     editingExpense.type ||
//     "Expense",
//   category:
//     editingExpense.category ||
//     "Food",
//   date: editingExpense.date
//     ? new Date(
//         editingExpense.date
//       )
//         .toISOString()
//         .split("T")[0]
//     : new Date()
//         .toISOString()
//         .split("T")[0],
//   description:
//     editingExpense.description ||
//     "",
// });
//     } else {
//       setExpense(initialState);
//     }
//   }, [editingExpense]);

//   const handleChange = (e) => {
//     setExpense({
//       ...expense,
//       [e.target.name]:
//         e.target.value,
//     });
//   };

//   const resetForm = () => {
//     setExpense(initialState);

//     if (setEditingExpense) {
//       setEditingExpense(null);
//     }
//   };

//   const handleSubmit = async (
//     e
//   ) => {
//     e.preventDefault();

//     if (
//       !expense.title.trim()
//     ) {
//       return alert(
//         "Title is required"
//       );
//     }

//     if (
//       Number(
//         expense.amount
//       ) <= 0
//     ) {
//       return alert(
//         "Amount should be greater than zero."
//       );
//     }

//     try {
//       setLoading(true);

//       if (
//         editingExpense
//       ) {
//         await API.put(
//           `/expenses/${editingExpense._id}`,
//           {
//             ...expense,
//             amount:
//               Number(
//                 expense.amount
//               ),
//           }
//         );

//         alert(
//           "Expense Updated"
//         );
//       } else {
//         await API.post(
//           "/expenses",
//           {
//             ...expense,
//             amount:
//               Number(
//                 expense.amount
//               ),
//           }
//         );

//         // alert(
//         //   "Expense Added"
//         // );
//         toast.success(
//   "Transaction Added!"
// );
//       }

//       resetForm();

//       loadExpenses();
//     } catch (err) {
//       // alert(
//       //   err.response?.data
//       //     ?.message ||
//       //     "Operation Failed"
//       // );
//       toast.error(
//   err.response?.data
//     ?.message ||
//     "Operation Failed"
// );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="card shadow-sm mb-4">

//       <div className="card-body">

//         <h3 className="mb-4">
//           {editingExpense
//             ? "Edit Expense"
//             : "Add Expense"}
//         </h3>

//         <form
//           onSubmit={
//             handleSubmit
//           }
//         >

//           <div className="row">

//             <div className="col-md-6 mb-3">

//               <label className="form-label">
//                 Title
//               </label>

//               <input
//                 type="text"
//                 className="form-control"
//                 name="title"
//                 value={
//                   expense.title
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 required
//               />

//             </div>

//             <div className="col-md-6 mb-3">

//               <label className="form-label">
//                 Amount
//               </label>

//               <input
//                 type="number"
//                 className="form-control"
//                 name="amount"
//                 value={
//                   expense.amount
//                 }
//                 onChange={
//                   handleChange
//                 }
//                 required
//               />

//             </div>

//           </div>

//           <div className="row">

//             <div className="col-md-6 mb-3">

//               <label className="form-label">
//                 Category
//               </label>

//               <select
//                 className="form-select"
//                 name="category"
//                 value={
//                   expense.category
//                 }
//                 onChange={
//                   handleChange
//                 }
//               >
//                 {categories.map(
//                   (cat) => (
//                     <option
//                       key={cat}
//                       value={cat}
//                     >
//                       {cat}
//                     </option>
//                   )
//                 )}
//               </select>

//             </div>

//             <div className="col-md-6 mb-3">

//               <label className="form-label">
//                 Date
//               </label>

//               <input
//                 type="date"
//                 className="form-control"
//                 name="date"
//                 value={
//                   expense.date
//                 }
//                 onChange={
//                   handleChange
//                 }
//               />

//             </div>

//           </div>

//           <div className="mb-3">

//             <label className="form-label">
//               Description
//             </label>

//             <textarea
//               rows="3"
//               className="form-control"
//               name="description"
//               value={
//                 expense.description
//               }
//               onChange={
//                 handleChange
//               }
//             ></textarea>

//           </div>

//           <div className="d-flex gap-2">

//             <button
//               className="btn btn-primary flex-fill"
//               disabled={
//                 loading
//               }
//             >
//               {loading
//                 ? "Saving..."
//                 : editingExpense
//                 ? "Update Expense"
//                 : "Add Expense"}
//             </button>

//             {editingExpense && (
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={
//                   resetForm
//                 }
//               >
//                 Cancel
//               </button>
//             )}

//           </div>

//         </form>

//       </div>

//     </div>
//   );
// };

// export default ExpenseForm;



import React, {
  useState,
  useEffect,
} from "react";
import API from "../services/api";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  amount: "",
  type: "Expense",
  category: "Food",
  date: new Date().toISOString().split("T")[0],
  description: "",
};

const categories = [
  "Food",
  "Travel",
  "Shopping",
  "Bills",
  "Medical",
  "Entertainment",
  "Others",
];

const ExpenseForm = ({
  loadExpenses,
  editingExpense,
  setEditingExpense,
}) => {
  const [expense, setExpense] =
    useState(initialState);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (editingExpense) {
      setExpense({
        title:
          editingExpense.title || "",
        amount:
          editingExpense.amount || "",
        type:
          editingExpense.type ||
          "Expense",
        category:
          editingExpense.category ||
          "Food",
        date: editingExpense.date
          ? new Date(
              editingExpense.date
            )
              .toISOString()
              .split("T")[0]
          : initialState.date,
        description:
          editingExpense.description ||
          "",
      });
    } else {
      setExpense(initialState);
    }
  }, [editingExpense]);

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]:
        e.target.value,
    });
  };

  const resetForm = () => {
    setExpense(initialState);

    if (setEditingExpense) {
      setEditingExpense(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!expense.title.trim()) {
      return toast.warning(
        "Title is required."
      );
    }

    if (
      Number(expense.amount) <= 0
    ) {
      return toast.warning(
        "Amount must be greater than zero."
      );
    }

    try {
      setLoading(true);

      const payload = {
        ...expense,
        amount: Number(
          expense.amount
        ),
      };

      if (editingExpense) {
        await API.put(
          `/expenses/${editingExpense._id}`,
          payload
        );

        toast.success(
          "Transaction Updated!"
        );
      } else {
        await API.post(
          "/expenses",
          payload
        );

        toast.success(
          "Transaction Added!"
        );
      }

      resetForm();
      loadExpenses();
    } catch (err) {
      toast.error(
        err.response?.data
          ?.message ||
          "Operation Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
  <div
    id="expense-form"
    className="card shadow-sm mb-4"
  >
      <div className="card-body">

        <h3 className="mb-4">
          {editingExpense
            ? "Edit Transaction"
            : "Add Transaction"}
        </h3>

        <form
          onSubmit={
            handleSubmit
          }
        >
          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Title
              </label>

              <input
                type="text"
                className="form-control"
                name="title"
                value={
                  expense.title
                }
                onChange={
                  handleChange
                }
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Amount
              </label>

              <input
                type="number"
                className="form-control"
                name="amount"
                value={
                  expense.amount
                }
                onChange={
                  handleChange
                }
                required
              />
            </div>

          </div>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Type
              </label>

              <select
                className="form-select"
                name="type"
                value={
                  expense.type
                }
                onChange={
                  handleChange
                }
              >
                <option value="Expense">
                  Expense
                </option>

                <option value="Income">
                  Income
                </option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Category
              </label>

              <select
                className="form-select"
                name="category"
                value={
                  expense.category
                }
                onChange={
                  handleChange
                }
              >
                {categories.map(
                  (cat) => (
                    <option
                      key={cat}
                      value={cat}
                    >
                      {cat}
                    </option>
                  )
                )}
              </select>
            </div>

          </div>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Date
              </label>

              <input
                type="date"
                className="form-control"
                name="date"
                value={
                  expense.date
                }
                onChange={
                  handleChange
                }
              />
            </div>

          </div>

          <div className="mb-3">
            <label className="form-label">
              Description
            </label>

            <textarea
              rows="3"
              className="form-control"
              name="description"
              value={
                expense.description
              }
              onChange={
                handleChange
              }
            />
          </div>

          <div className="d-flex gap-2">

            <button
              type="submit"
              className="btn btn-primary flex-fill"
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : editingExpense
                ? "Update Transaction"
                : "Add Transaction"}
            </button>

            {editingExpense && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={
                  resetForm
                }
              >
                Cancel
              </button>
            )}

          </div>

        </form>

      </div>
    </div>
  );
};

export default ExpenseForm;

