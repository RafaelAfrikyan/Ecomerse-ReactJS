import { useState } from "react";

import "./Navbar.css";

function Navbar({ openModal }) {
  return (
    <div className="navbar">
      <div>Logo</div>
      <img
        src="data:image/png;base64,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"
        alt="sorry"
        onClick={openModal}
      />
    </div>
  );
}

export default Navbar;
