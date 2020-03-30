import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Cadence = () => (
  <Layout>
    <SEO title="Cadence" />
    <Room>
      <h1>Lady Cadence</h1>
      <p>
        Cute freckles cover this entire woman's face. She has emerald green eyes
        that seem aware and alert. Red hair is brushed back into two simple
        pony-tails that hang loosely on either side of her neck. Long bangs flow
        down to the collar of a simple off-white linen robe. Engraved on her
        right cheek is a large battleaxe that appears alive in all its glory. On
        occasion, it hums and omits a green aura about her. Soft light blue
        leggings caress down her legs to woven sandals which encompass her small
        feet. Trickling up her partially clothed arms are large scars that
        appear to have been formed by large talons slicing at her skin. Her
        hands look well worn, but in particular her left index finger bears a
        large blackened scar.
        <br />
        An intricate tattoo of a dagger drawn of black ink resides on her left
        forearm. Around the dagger in red ink resides a large broadsword. Within
        the two tattoos remains a large "R". Along her right forarm, a large
        scar forms the handle of a wide Warhammer. Upon her left cheek is a
        battleaxe that mimics the one on her right cheek, though it appears less
        life-like.
      </p>
      <Exits>
        <Link to="/valhalla/keep/moderate-barracks">
          A moderate Crusader barracks
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Cadence;
