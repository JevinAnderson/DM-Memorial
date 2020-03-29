import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Kevinlape = () => (
  <Layout>
    <SEO title="Kevinlape" />
    <Room>
      <h1>Kevinlape Vinilyal, Butcher of the Steel Clan</h1>
      <p>
        Before you is a hulking, tanned giant, his skin a dusty red in color.
        His face is shadowed by a low, bony brow, with bushy eyebrows of a dark
        black shading his deepset eyes. His long black hair is not bound and
        bounces around his face as he walks. Physically, he appears in fine
        form, his arms and legs well muscled and a chest as broad as most humans
        are tall. His forearms and hands appear marked with scars, and a deep,
        jagged gouge runs the length of the outside of his left arm, reaching
        from elbow to wrist. A red scarf is tied to his left shoulder. A dagger
        tattoo in blood red colour is on the left arm. A large Broadsword tattoo
        in deep blue paint is nearby. A deadly warhammer tattoo in green paint
        is visible on the left arm, and a Battleaxe wrapped in green aura,
        showing his rank in Crusades.
      </p>
      <Exits>
        <Link to="/valhalla/keep/canteen">The Crusader Canteen</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Kevinlape;
