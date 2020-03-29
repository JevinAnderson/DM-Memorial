import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import {
  Equipment,
  Torso,
  Head,
  Feet,
  Body,
  Legs,
  Shield,
  Wielded,
} from "../../components/equipment";

const Cylan = () => (
  <Layout>
    <SEO title="Cylan" />
    <Room>
      <h1>Lord Cylan</h1>
      <p>
        His stature is enormous as this being glares steadily with dark, blood
        colored eyes. His skin, from the tip of his humanoid head to the flank
        of his equine form is of so deep of ebony color that if any light
        appears to shine upon it that it could take the appearance of a deep
        purple. His humanoid head is accentuated with sleek ebony hair that
        flows to somewhere between his shoulder blades. His angular facial
        features seem to sharpen the gaze of his blood-red eyes. A mane
        comprised completely of fire, starts where his hair is cut, between his
        shoulder blades, all the way to a long, thick tail of flame that whips
        and flickers violently at any light. Bulging veins contour and meander
        throughout his entire form yet they do not take on the same color of the
        ebony skin, rather they glow a deep wine color and pulse an eerie
        rhythm. His hooves appear to be made of a solid, blood-red rock of
        perfect hoof contour and as he stampers red sparks are made upon any
        surface. His strong, humanoid hands seem to flex, periodically, and a
        glimpse of what appears to be sharp talons of blood-red color can be
        seen.
      </p>
      <p>
        <Equipment name="Cylan">
          <Torso>(Dark) Saddle of Mortality</Torso>
          <Head>(Flaming) Helmet named Hell's Fire</Head>
          <Legs>(Dark) Leggings named Hunter's Pride</Legs>
          <Feet>(Flamimg) Horseshoes named Hell's Thunder</Feet>
          <Shield>(Dark) Shadow's Embrace</Shield>
          <Body>(Screaming) A shadow cape emitting mortal screams</Body>
          <Wielded>(Pulsing) (Sticky) (Dark) Shadow's Embrace</Wielded>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/banquet">The Banquet Hall</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Cylan;
