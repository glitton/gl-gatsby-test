import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Layout />
      Hello World, It's Me!
      <div>
        <Link to="/blog">Blog page</Link>
        <a href="/products">Products page</a>
      </div>
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  );
}
