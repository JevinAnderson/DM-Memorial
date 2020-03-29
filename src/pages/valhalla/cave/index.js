import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Characters from "../../../components/characters";

const Cave = () => (
  <Layout>
    <SEO title="The Cave" />
    <Room>
      <h1>The Cave</h1>
      <p>
        You enter a massive cavern. A bizarre structure, the cavern has many
        chambers of radically different composition. In one you see organized
        training spaces, a supply master, and a large scoreboard containing
        names and tallies. In another, gore is strewn everywhere, the ground is
        sundered and it appears things have burst from the ground, and in the
        center is a large pool of blood. In yet another chamber, there are
        ritualistic totems, strange costumes, and various armaments pulsing with
        a dark aura of taint and corruption. In the center of the cave, an
        eclectic group of individuals including shamans, vampires, and assassins
        congregate around Lord Isimsiz as he describes the workings of esoteric
        rituals to spread darkness, fear, and hate while drawing strength and
        power from the work.
        <br />
        <br />
        In the floor a fiery pit draws your attention. A circular staircase
        spirals downwards into the flames. Enter at your own risk.
      </p>
      <Exits>
        <Link to="/valhalla/hall-3">east</Link>
        <Link to="/valhalla/cave/brethren">down</Link>
      </Exits>
      <Characters>
        <Link to="/characters/isimsiz">Lord Isimsiz is here.</Link>
      </Characters>
    </Room>
  </Layout>
);

export default Cave;
