import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import Spaces from "../../../components/spaces";
import { Link } from "gatsby";

const GreenRoom = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Green Room</h1>
      <p>
        You enter a barracks built for the medium and smaller races in the
        Crusader ranks. Comfortable cots and bunks with heavy cotton blankets
        line the walls. Several nests made of straw and twigs line the northern
        part of the walls for the draconian race to sleep in. A fireplace to the
        east burns various pine woods, warming the room and carrying the fresh
        scent of pine in the air.
      </p>
      <Exits>
        <Link to="/valhalla/keep/further-2">north</Link>
        <Link to="/valhalla/keep/southeast-tower">east</Link>
        <Link to="/valhalla/keep/altar-to-nature">south</Link>
        <Link to="/valhalla/keep/intersection">west</Link>
      </Exits>
      <Spaces />
      A natural spring in the marble fountain gushes cool water for all.
      <br />
      <Spaces />
      A folded sheet of aged parchment lies upon the ground.
      <br />
      A cricket slowly moves across the floor.
      <br />
      A cricket slowly moves across the floor.
      <br />
      A cricket slowly moves across the floor.
      <br />
      A cricket slowly moves across the floor.
      <br />
      A cricket slowly moves across the floor.
      <br />
      <Link to="/characters/jaghar">
        A centaur ranger tends to the Green Room.
      </Link>
      <br />
    </Room>
  </Layout>
);

export default GreenRoom;
