import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Rasrin = () => (
  <Layout>
    <SEO title="Rasrin" />
    <Room>
      <h1>Lord Rasrin</h1>
      <p>
        Here is a pale blue ghost of a storm giant. The ghost is transparent and
        looks to be 16 feet in height. He has many markings bearing his station
        within the Neverending Crusade. You see a small dagger on each palm, a
        broadsword on the top of each hand, twin warhammers around each wrist,
        and battleaxes right above them. On each finger is a letter till they
        spell the word "Warlord", with a small rose on the last finger. As you
        meet his gaze, you notice he has green eyes that are full of peace.
      </p>
      <Exits>
        <Link to="/valhalla/keep/chamber-of-decisions">
          The Chamber of Decisions
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Rasrin;
