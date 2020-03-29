import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Maelstrom = () => (
  <Layout>
    <SEO title="Maelstrom" />
    <Room>
      <h1>Lord Maelstrom</h1>
      <p>
        Your eyes come to rest upon a man of epic proportions. Standing 8 feet
        tall at the shoulders, he is larger than any human you have ever seen.
        His body is covered with large, compact muscles that ripple fluidly as
        he moves. He is clad only in a pair of leather breaches that have gone
        to tatters just above the knees. Dark grey streaks flow across his black
        skin, calling the image of roiling thunderclouds to your mind. His sad
        eyes reflect a dim golden glow as he observes his surroundings,
        smoldering with an inner fire that sets your soul to quaking. Thick
        wisps of acrid smoke drift upward from his naked torso and bald head,
        causing your eyes to water. His broad shoulders are stooped, as though
        under a great weight, and his once proud face has taken on an expression
        of great sorrow.
      </p>
      <Exits>
        <Link to="/valhalla/keep/forge">The Crusader Forge</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Maelstrom;
