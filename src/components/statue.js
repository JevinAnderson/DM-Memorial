import React from "react";

import Layout from "./layout";
import SEO from "./seo";
import Room from "./room";
import Exits from "./exits";
import { Link } from "gatsby";

const toLink = (first, second) => {
  if (first) {
    return "/valhalla/keep/hall-of-memory";
  }

  if (second) {
    return "/valhalla/keep/hall-of-memory-2";
  }

  return "/valhalla/keep/hall-of-memory";
};

const Statue = ({ children, title, first, second }) => (
  <Layout>
    <SEO title={title} />
    <Room>
      <h1>{title}</h1>
      <p>{children}</p>
      <Exits>
        <Link to={toLink(first, second)}>The Keep</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Statue;
