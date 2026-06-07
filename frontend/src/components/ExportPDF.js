// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";

// const ExportPDF = ({ expenses }) => {

//   const generatePDF = () => {

//     const doc = new jsPDF();

//     doc.setFontSize(20);
//     doc.text(
//       "Expense Report",
//       14,
//       20
//     );

//     const tableData =
//       expenses.map(
//         (expense) => [
//           expense.title,
//           expense.category,
//           expense.amount,
//           new Date(
//             expense.date
//           ).toLocaleDateString(),
//         ]
//       );

//     autoTable(doc, {
//       startY: 30,
//       head: [[
//         "Title",
//         "Category",
//         "Amount",
//         "Date",
//       ]],
//       body: tableData,
//     });

//     doc.save(
//       "ExpenseReport.pdf"
//     );
//   };

//   return (
//     <button
//       className="btn btn-success mb-3"
//       onClick={
//         generatePDF
//       }
//     >
//       Export PDF
//     </button>
//   );
// };

// export default ExportPDF;

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ExportPDF = ({
  expenses,
}) => {

  const exportPDF =
    () => {

      const doc =
        new jsPDF();

      const income =
        expenses
          .filter(
            (
              e
            ) =>
              e.type ===
              "Income"
          )
          .reduce(
            (
              a,
              b
            ) =>
              a +
              b.amount,
            0
          );

      const expense =
        expenses
          .filter(
            (
              e
            ) =>
              e.type ===
              "Expense"
          )
          .reduce(
            (
              a,
              b
            ) =>
              a +
              b.amount,
            0
          );

      doc.setFontSize(
        20
      );

      doc.text(
        "Expense Tracker Report",
        14,
        15
      );

      doc.setFontSize(
        12
      );

      doc.text(
        `Total Income : ₹${income}`,
        14,
        30
      );

      doc.text(
        `Total Expense : ₹${expense}`,
        14,
        38
      );

      doc.text(
        `Balance : ₹${
          income -
          expense
        }`,
        14,
        46
      );

      autoTable(
        doc,
        {
          startY: 60,

          head: [[
            "Title",
            "Type",
            "Category",
            "Amount",
            "Date",
          ]],

          body:
            expenses.map(
              (
                item
              ) => [
                item.title,
                item.type,
                item.category,
                item.amount,
                new Date(
                  item.date
                ).toLocaleDateString(),
              ]
            ),
        }
      );

      doc.save(
        "ExpenseReport.pdf"
      );
    };

  return (
    <button
      className="btn btn-success"
      onClick={exportPDF}
    >
      Export PDF
    </button>
  );
}
export default ExportPDF;