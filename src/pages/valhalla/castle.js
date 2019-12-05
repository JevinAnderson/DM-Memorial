import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Castle = () => (
  <Layout>
    <SEO title="The Castle" />
    <Room>
      <h1>The Castle</h1>
      <p>
        You stand in the banquet hall of a beautiful white marble castle.
        Banners extolling knightly virtues are hung about the castle walls.
        Looking out a window, you can see a vast field with the souls of noble
        steeds running freely. In the hall an enormous round table seats the
        valiant knights of Valor. People often change seats to speak with old
        friends or to meet knights in the afterlife, whom they had never known
        as mortals. There is no importance placed in the arrangement. All are
        equal here.
      </p>
      <Exits>
        <Link to="/valhalla/hall-2">east</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Castle;
