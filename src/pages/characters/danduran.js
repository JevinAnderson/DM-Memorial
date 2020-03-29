import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Danduran = () => (
  <Layout>
    <SEO title="Danduran" />
    <Room>
      <h1>Danduran Verke</h1>
      <p>
        Standing around six feet tall in front of you is a fair skinned human.
        His face is toned and muscular, his ears and nose perfectly sized for
        his face, his eyes, a piercing blue. His face is covered in a very
        scruffy beard. His body is covered by robes and some armorments, though
        his toned definition can be seen upon his exposed legs. His large hands
        bear no weapon, though there is a slight glow to his fists. A tattoo of
        a DAGGER can be seen upon his right forearm. Above the dagger tattoo a
        slightly larger BROADSWORD tattoo can be seen. Upon his inner right
        forearm is a large WARHAMMER tattoo. Upon the top of his right arm,
        beautifully scripted is the word ENVOY. Upon his left inner arm is a
        large gray shield. Upon the shield is an Anvil wreathed with blue-white
        flames. Below the Anvil in large leaders is the word "LEADER".
      </p>
      <Exits>
        <Link to="/valhalla/keep/chamber-of-decisions">
          The Chamber of Decisions
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Danduran;
