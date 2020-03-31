import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import Spaces from "../../../components/spaces";
import { Link } from "gatsby";
import Characters from "../../../components/characters";

const GreenRoom = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Green Room</h1>
      <p>
        A cool mist and the sound of splashing water greets you as you enter
        this part of the keep. It seems the Crusaders planted a miniature forest
        inside their castle! For a moment it is hard to tell whether you stand
        inside or out until you catch sight of the large stone ceiling arching
        overhead. Small oaks, pines, vines, bushes, and flowers of all sorts
        thrive here. A marble fountain squirts cool water in the center of the
        tranquil room. Suddenly, you notice a figure blended in with the natural
        colors, eyeing your every move. Near one of the bushes is a mound and a
        marker.
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
      <Characters>
        <Link to="/characters/darkwood">
          A towering giant gazing down as a cyclone spins foliage around him
        </Link>
        <Link to="/characters/aydain">
          A pretty blonde elf puts the finishing touches on a new pelt.
        </Link>
        <Link to="/characters/terius">Terius is here.</Link>
      </Characters>
    </Room>
  </Layout>
);

export default GreenRoom;
