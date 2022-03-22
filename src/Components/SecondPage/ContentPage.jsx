import React from "react";
import { Link } from "react-router-dom";

export default function ContentPage() {
  return (
    <>
      <div>Here will be a ContentPage</div>
      <h2>Hello</h2>

      <Link to="/">
        <button>Go Home</button>
      </Link>
    </>
  );
}
