import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import Spaces from "../../../components/spaces";
import { Link } from "gatsby";

const ModerateBarracks = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>Altar to Nature</h1>
      <p>
        This space further connects to the Green Room. It is barely noticeable
        where one room begins and the other ends. Plants, vines, flowers, and
        vegetation of all sorts grow plentiful here. A strange wooden altar is
        built to honor true nature. A sense of purity with the land is felt
        while one is near the altar. On either side of the altar are natural
        wooden tables, as though they grew as such, their legs rooted into the
        ground. Upon those tables are small potted oak trees, bonsai of great
        age and beauty. Their leaves are tiny replicas of full-sized oak leaves,
        golden in color.
      </p>
      <Exits>
        <Link to="/valhalla/keep/green-room">north</Link>
      </Exits>
      <Spaces />
      An altar to nature is here, made of living wood.
      <br />
      A cricket slowly moves across the floor.
      <br />
      A cricket slowly moves across the floor.
      <br />
      A cricket slowly moves across the floor.
      <br />
      <Link to="/characters/druid-of-darkwood">
        A tall giant in a green robe silently stands here, observing everything.
      </Link>
      <br />
    </Room>
  </Layout>
);

export default ModerateBarracks;
