import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Yaburg = () => (
  <Layout>
    <SEO title="Yaburg" />
    <Room>
      <h1>Yaburg the supply master</h1>
      <p>
        Yaburg the giant shopkeeper runs the Crusader canteen. His eyes are
        melted away and the front of his body is burnt and charred from one too
        many fire- balls cast on him in battle. Every moment or so you hear him
        apologize as he crashes into something and sends items flying
        everywhere. Yaburg greets the sound of any company with a huge smile and
        chats in broken giant talk.
      </p>
      <Exits>
        <Link to="/valhalla/keep/canteen">The Crusader Canteen</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Yaburg;
