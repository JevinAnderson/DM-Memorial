import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Characters from "../../../components/characters";

const FurtherInTheKeep = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>Further in the Keep</h1>
      <p>
        This hall carries you further ino Castle Balkra. Each step sounds off a
        deep echo carried through the heavy stone halls. To the east under a
        large Roman arch lies a large barracks. To the north one can make their
        way further to the east side of the castle. Along the base of the wall
        to the west, there is a marble pipe stretching toward the north and
        south.
      </p>
      <p>
        A proclamation entitled{" "}
        <Link to="/items/war-agreement">WAR AGREEMENT</Link> hangs on the
        eastern wall.
      </p>
      <Exits>
        <Link to="/valhalla/keep/east-side">north</Link>
        <Link to="/valhalla/keep/large-barracks">east</Link>
        <Link to="/valhalla/keep/inner-keep">south</Link>
      </Exits>
      <Characters>
        <Link to="/characters/tanzer">Tanzer is here.</Link>
      </Characters>
    </Room>
  </Layout>
);

export default FurtherInTheKeep;
