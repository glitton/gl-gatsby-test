import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

function Products() {
  return (
    <div>
      <Layout />
      <h1>The products page</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Products;
