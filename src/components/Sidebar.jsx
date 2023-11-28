// // Sidebar.js
// import React from "react";

// const Sidebar = ({ isOpen, toggleSidebar, openPage }) => {
//   const menuItems = [
//     { label: "Dashboard", page: "dashboard" },
//     { label: "Profile", page: "profile" },
//     // Add more menu items as needed
//   ];

//   return (
//     <aside className={`sidebar ${isOpen ? "open" : ""}`}>
//       <ul>
//         {menuItems.map((item) => (
//           <li key={item.page}>
//             <a href="#" onClick={() => openPage(item.page)}>
//               {item.label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
import React from "react";

function Sidebar() {
  return <div>Sidebar</div>;
}

export default Sidebar;
