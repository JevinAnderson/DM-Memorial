import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Lazaron = () => (
  <Layout>
    <SEO title="Lazaron" />
    <Room>
      <h1>Lazaron Stanach of the Silverhammer Clan</h1>
      <p>
        A muscular dwarf with long black hair and beard stands here, bringing
        with him the smell of a whole year's brew of ale. He has large brown
        eyes, looking around with an emotionless gaze, bringing his hand to his
        weapon from time to time. He has a scar on his left cheek, probably an
        old battle wound which seems to have originated from a slashing weapon.
        He seems to favor his left leg a bit, but does not seem concerned about
        it. He has painted himself in strange designs around his body, around
        these places he has less hair. He has the tattoo of a hammer banging on
        a shield on his forehead. On his right arm is the tattoo of a
        well-crafted warhammer with a steel head and a jade adorned hilt.
      </p>
      <Exits>
        <Link to="/valhalla/keep/east-side">East side of the Keep</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Lazaron;
