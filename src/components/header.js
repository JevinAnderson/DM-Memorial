import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import styles from "./header.module.css";

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "dm_title.png" }) {
        childImageSharp {
          fluid(maxWidth: 435) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <Banner />
    </Link>
  </header>
);

export default Header;
