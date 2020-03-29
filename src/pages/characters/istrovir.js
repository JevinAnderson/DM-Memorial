import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import {
  Equipment,
  Ring,
  Head,
  Wrist,
  Body,
  Wielded
} from "../../components/equipment";

const Istrovir = () => (
  <Layout>
    <SEO title="Istrovir" />
    <Room>
      <h1>Lord Istrovir</h1>
      <p>
        A lithe and wirey drow stands just at the edges of the periphery of your
        vision. His hair is straight and sable falling across his forehead to
        deep, slanting lavender eyes. His face is smooth and free of any
        imperfections. A cloak of obvious ancient make yet free of the ravages
        of time adorns his body covering the mithril tunic he wears beneath. His
        counternace is one of a collected calm from centuries of practice as his
        features are delicate and fine as if he has escaped the very clutches of
        death and ravages of time. He stands tall and regal yet seems to scowl
        at any who stare to long.
      </p>
      <p>
        <Equipment name="Istrovir">
          <Ring>
            (Glowing) (Humming) a ring engraved with the Valgen signet
          </Ring>
          <Ring>(Glowing) (Humming) a ring set with sunstones</Ring>
          <Head>the Mask of Undeath</Head>
          <Body>(Glowing) a long midnight black cloak</Body>
          <Wrist>a bracer inscribed with the word "Bloodlust"</Wrist>
          <Wrist>a bracelet of elven bones</Wrist>
          <Wielded>(Glowing) (Humming) the Nightreaver</Wielded>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/banquet">The Banquet Hall</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Istrovir;
