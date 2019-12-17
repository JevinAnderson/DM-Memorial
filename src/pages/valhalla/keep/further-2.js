import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";

const FurtherInTheKeep = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>Further in the Keep</h1>
      <p>
        This passage leads further into the keep. Solid stones make up the
        sturdy walls of the keep. The floors are polished to a glossy shine. To
        the east a Roman arch allows passage to a barracks. To the south you see
        a lot of foliage from under the stone arch. Along the base of the wall
        to the west, a marble pipe runs north and south. On the walls near the
        Inner Keep, a number of human hand prints have haphazardly stained the
        walls with dried blood.
      </p>
      <Exits>
        <Link to="/valhalla/keep/inner-keep">north</Link>
        <Link to="/valhalla/keep/moderate-barracks">east</Link>
        <Link to="/valhalla/keep/green-room">south</Link>
      </Exits>
    </Room>
  </Layout>
);

export default FurtherInTheKeep;
