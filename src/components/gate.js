import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export const Gate = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "door.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 162) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Gate;
