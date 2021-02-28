import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const Blog = () => {
  return (
    <div>
      <Layout />
      <h1>GL Codeworks Blog Page</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Blog;
