import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Xartaul = () => (
  <Layout>
    <SEO title="Xartaul" />
    <Room>
      <h1>Lord Xartaul</h1>
      <p>
        Long bearded, squat and stocky this dwarf. Grizzled of expression his
        eyes look wild and bloodshot. As most of his kind he is thick of belly
        and stout of arm. His hair is oily and black, his beard blacker. A lack
        luster countenance carries itself about his person, but his shoulders
        are square and his hands strong. Upon his left cheek is slight scar that
        looks as if it came from a claw or jagged blade.
      </p>
      <Exits>
        <Link to="/valhalla/keep/further-2">Further in the Keep</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Xartaul;
