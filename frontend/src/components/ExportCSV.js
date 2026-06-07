import React from "react";
import { saveAs } from "file-saver";

const ExportCSV = ({ expenses }) => {
  const exportCSV = () => {
    if (!expenses.length) {
      alert("No transactions to export.");
      return;
    }

    const headers = [
      "Title",
      "Type",
      "Category",
      "Amount",
      "Date",
      "Description",
    ];

    const rows = expenses.map(
      (item) => [
        item.title,
        item.type,
        item.category,
        item.amount,
        new Date(
          item.date
        ).toLocaleDateString(),
        item.description || "",
      ]
    );

    const csvContent = [
      headers,
      ...rows,
    ]
      .map((e) =>
        e.join(",")
      )
      .join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    saveAs(
      blob,
      "ExpenseReport.csv"
    );
  };

//   return (
//     <button
//       className="btn btn-primary me-2 mb-3"
//       onClick={exportCSV}
//     >
//       Export CSV
//     </button>
//   );
// };

return (
    <button
      className="btn btn-primary"
      onClick={exportCSV}
    >
      Export CSV
    </button>
  );
}
export default ExportCSV;