// // src/components/BottomNavigation.js
// import React from "react";
// import { Link } from "react-router-dom";

// const BottomNavigation = () => {
//   return (
//     <nav
//       className=" w-full  flex justify-center items-center "
//       aria-label="Page navigation "
//     >
//       <ul class="inline-flex">
//         <li>
//           <button class="h-10 px-5 text-indigo-600 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-indigo-100">
//             <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
//               <path
//                 d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                 clip-rule="evenodd"
//                 fill-rule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </li>
//         <li>
//           <button class="h-10 px-5 text-indigo-600 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100">
//             Carousal
//           </button>
//         </li>
//         <li>
//           <button class="h-10 px-5 text-indigo-600 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100">
//             Pie Chart
//           </button>
//         </li>
//         <li>
//           <button class="h-10 px-5 text-indigo-600 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100">
//             Line Chart
//           </button>
//         </li>{" "}
//         <li>
//           <button class="h-10 px-5 text-indigo-600 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100">
//           Map
//           </button>
//         </li>{" "}
//         <li>
//           <button class="h-10 px-5 text-indigo-600 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100">
//           Tabbed layout
//           </button>
//         </li>
//         <li>
//           <button class="h-10 px-5 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 focus:shadow-outline">
//             Calendar view
//           </button>
//         </li>
//         <li>
//           <button class="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100">
//             <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
//               <path
//                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                 clip-rule="evenodd"
//                 fill-rule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default BottomNavigation;


// src/components/BottomNavigation.js
import React from "react";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <nav className="w-full bg-white border-t border-gray-300 fixed bottom-0">
      <ul className="flex justify-between items-center p-4">
        <li>
          <button className="h-10 w-10 flex items-center justify-center text-indigo-600 rounded-full focus:outline-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        <li>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700 focus:outline-none">
            Carousal
          </Link>
        </li>
        <li>
          <Link to="/pie-chart" className="text-indigo-600 hover:text-indigo-700 focus:outline-none">
            Pie Chart
          </Link>
        </li>
        <li>
          <Link to="/line-chart" className="text-indigo-600 hover:text-indigo-700 focus:outline-none">
            Line Chart
          </Link>
        </li>
        <li>
          <Link to="/map" className="text-indigo-600 hover:text-indigo-700 focus:outline-none">
            Map
          </Link>
        </li>
        <li>
          <Link to="/tabbed-layout" className="text-indigo-600 hover:text-indigo-700 focus:outline-none">
            Tabbed Layout
          </Link>
        </li>
        <li>
          <Link to="/calendar-view" className="text-white bg-indigo-600 rounded-full px-4 py-2 focus:outline-none">
            Calendar View
          </Link>
        </li>
        <li>
          <button className="h-10 w-10 flex items-center justify-center text-indigo-600 rounded-full focus:outline-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
