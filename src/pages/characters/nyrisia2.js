import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import {
  Equipment,
  Torso,
  Wrist,
  Body,
  TwoHand,
  Brand
} from "../../components/equipment";

const Nyrisia = () => (
  <Layout>
    <SEO title="Nyrisia" />
    <Room>
      <h1>Lady Nyrisia</h1>
      <p>
        A long golden robe flows just to the floor. Small black slippers cover
        just her toes and heel, strapped twice over just below her ankles. A
        burgundy tunic fits loosely over her lithe form. Three hoops are clasped
        about the tips of either ear. A luminescent glow radiates from her
        flawless white skin. Small red irises glare through any light with a
        baleful gaze shrouded only by her bangs. Long white hair is tied loosely
        in a high pony tail. A string of pearls rests at her neck, ever changing
        their hue. A grand walking stick features a gaping dragons final breath
        upon the top. At her hip is a small wand of carved ivory inlaid with
        silver-- a large blue-black gemstone resides at the tip.{" "}
      </p>
      <p>
        <Equipment name="Nyrisia">
          <Torso>a mantle of woven silk</Torso>
          <Body>(Glowing) a brilliant golden robe</Body>
          <Wrist>a bracelet of woven unicorn hair</Wrist>
          <Wrist>a bracelet of woven unicorn hair</Wrist>
          <TwoHand>
            a walking stick with a carved dragon head at the tip
          </TwoHand>
          <Brand god="nyrisia2"></Brand>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/banquet">The Banquet Hall</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Nyrisia;
