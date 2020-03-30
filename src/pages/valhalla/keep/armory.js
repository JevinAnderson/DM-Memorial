import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Characters from "../../../components/characters";

const Armory = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Armory</h1>
      <p>
        The thick stone stairs lead straight down into this room. The air here
        seems a bit more moist and the temperature a bit cooler. Moss seems to
        thrive on the smooth stone walls that make up the basement room here.
        The room slopes to form a pit for weapons and gear won in battles but
        not needed. Visible exits are to the south and the stairs leading
        upward. The scent of alcohol wafts in from the south.
      </p>
      <Exits>
        <Link to="/valhalla/keep/bar">south</Link>
        <Link to="/valhalla/keep/intersection">up</Link>
      </Exits>
      <Characters>
        <Link to="/characters/ortega">Ortega is here.</Link>
        <Link to="/characters/osric">Osric is here.</Link>
      </Characters>
    </Room>
  </Layout>
);

export default Armory;
