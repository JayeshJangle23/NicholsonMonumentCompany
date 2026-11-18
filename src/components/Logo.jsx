// import React from "react";
// import { Flower2 } from "lucide-react";
// export default function Logo({ compact = false }) {
//   return (
//     <a
//       className={`brand ${compact ? "brand--compact" : ""}`}
//       href="#home"
//       aria-label="Nicholson Monument Company home"
//     >
//       <span className="brand-mark">
//         <span className="brand-mark__letters">N</span>
//         <Flower2 size={24} strokeWidth={1.4} />
//       </span>
//       <span className="brand-copy">
//         <strong>NICHOLSON</strong>
//         <small>MONUMENT COMPANY</small>
//       </span>
//     </a>
//   );
// }


// import React from "react";
// import { Link } from "react-router-dom";
// import logoImg from "./logo.png"; // Update path & filename to match your image

// export default function Logo({ compact = false }) {
//   return (
//     <Link
//       className={`brand ${compact ? "brand--compact" : ""}`}
//       to="/"
//       aria-label="Nicholson Monument Company home"
//     >
//       <img
//         src={logoImg}
//         alt="Nicholson Monument Company"
//         className="brand-logo"
//       />
//     </Link>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./logo.png"; // Update with your actual image path

export default function Logo({ compact = false }) {
  return (
    <Link
      className={`brand ${compact ? "brand--compact" : ""}`}
      to="/"
      aria-label="Nicholson Monument Company home"
    >
      <img
        src={logoImg}
        alt="Nicholson Monument Company"
        className="brand-logo"
      />
    </Link>
  );
}
