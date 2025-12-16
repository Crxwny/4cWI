import React from "react";

import { Link } from "react-router-dom";

export default function Page2() {
  return (
    <div>
      <h1>Page 2</h1>
      <Link to="/" className="hover:cursor-pointer ">
        Page 1
      </Link>
    </div>
  )
}

