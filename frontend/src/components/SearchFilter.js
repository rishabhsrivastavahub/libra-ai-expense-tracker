// import React from "react";

// const SearchFilter = ({
//   searchTerm,
//   setSearchTerm,
//   selectedCategory,
//   setSelectedCategory,
//   sortBy,
//   setSortBy,
// }) => {
//   const categories = [
//     "All",
//     "Food",
//     "Travel",
//     "Shopping",
//     "Bills",
//     "Medical",
//     "Entertainment",
//     "Others",
//   ];

//   return (
//     <div className="card shadow-sm mb-4">
//       <div className="card-body">
//         <div className="row align-items-end">
          
//           {/* Search */}
//           <div className="col-md-4 mb-3">
//             <label htmlFor="searchInput" className="form-label fw-bold">
//               Search
//             </label>
//             <input
//               id="searchInput"
//               type="text"
//               className="form-control"
//               placeholder="Search by title..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           {/* Category */}
//           <div className="col-md-4 mb-3">
//             <label htmlFor="categorySelect" className="form-label fw-bold">
//               Category
//             </label>
//             <select
//               id="categorySelect"
//               className="form-select"
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//             >
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Sorting */}
//           <div className="col-md-4 mb-3">
//             <label htmlFor="sortSelect" className="form-label fw-bold">
//               Sort By
//             </label>
//             <select
//               id="sortSelect"
//               className="form-select"
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//             >
//               <option value="latest">Latest First</option>
//               <option value="oldest">Oldest First</option>
//               <option value="highest">Highest Amount</option>
//               <option value="lowest">Lowest Amount</option>
//             </select>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchFilter;

import React from "react";

const SearchFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const categories = [
    "All",
    "Food",
    "Travel",
    "Shopping",
    "Bills",
    "Medical",
    "Entertainment",
    "Others",
  ];

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        {/* Row 1: Search, Category, Sort */}
        <div className="row align-items-end">
          <div className="col-md-4 mb-3">
            <label htmlFor="searchInput" className="form-label fw-bold">
              Search
            </label>
            <input
              id="searchInput"
              type="text"
              className="form-control"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="categorySelect" className="form-label fw-bold">
              Category
            </label>
            <select
              id="categorySelect"
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="sortSelect" className="form-label fw-bold">
              Sort By
            </label>
            <select
              id="sortSelect"
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Amount</option>
              <option value="lowest">Lowest Amount</option>
            </select>
          </div>
        </div>

        {/* Row 2: Date Range Filter */}
        <div className="row align-items-end">
          <div className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="startDate" className="form-label fw-bold">
              Start Date
            </label>
            <input
              id="startDate"
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="endDate" className="form-label fw-bold">
              End Date
            </label>
            <input
              id="endDate"
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;