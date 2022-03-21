import React from "react";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <>
      <div>Users</div>;
      <button>
        <Link to="/">Home</Link>
      </button>
    </>
  );
}
