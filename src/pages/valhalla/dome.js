import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import Characters from "../../components/characters";
import { Chromatic, Golden } from "../../components/auras";
import { Link } from "gatsby";

const Dome = () => (
  <Layout>
    <SEO title="The Dome" />
    <Room>
      <h1>The Dome</h1>
      <p>
        You see crystalline trimming along the opening as you enter a grand
        crystalline dome. Light enters through many facets of the dome, sprayed
        throughout. It is almost blinding. Every so often as you move, you sense
        the light in its refractive form, a rainbow of color dashing across your
        vision for a moment, then merging once again to become white light. The
        ground beneath your feet is smooth, polished, almost clear. Throughout
        the dome angels mingle amongst each other. Mortals of the light have
        taken their place amongst them for their service to the heavens. As Lord
        Adorno walks among them halos brighten with his passing. Serene music
        can be heard faintly everywhere, and a sense of calm and peace settles
        upon your soul.
      </p>
      <Exits>
        <Link to="/valhalla/hall-3">west</Link>
      </Exits>
      <Characters>
        <Link to="/characters/lelak">
          <Golden /> Lelak the Avatar of Loyalty is here.
        </Link>
        <Link to="/characters/angel">
          <Chromatic /> Two ivory angel statues stand sentinel at the entrance.
        </Link>
      </Characters>
    </Room>
  </Layout>
);

export default Dome;
