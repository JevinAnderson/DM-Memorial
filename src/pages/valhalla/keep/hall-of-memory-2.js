import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import Characters from "../../../components/characters";
import { Link } from "gatsby";

const HallOfMemory = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Halls of Memory</h1>
      <p>
        Any sound created in this hall echoes down the large stretch of the
        stone domed ceiling. The finely polished stones that make up the walls
        and floor are scattered with works of art. Paintings display the tales
        of Crusader immortals. Scenes of great battles between the Crusader gods
        and their divine enemies jump out in vivid colors and detail. A feeling
        of awesome power entirely foreign to mortal experience surges though
        many of the works of art. Large marble statues representing the titans
        themselves line the long stone hall. The mere act of traveling past the
        statues evokes an overwhelming sense of awe.
      </p>
      <Exits>
        <Link to="/valhalla/keep/inner-keep">east</Link>
        <Link to="/valhalla/keep/hall-of-memory">west</Link>
      </Exits>
      <Characters>
        A marble statue of Aegnor is here.
        <br />
        A marble statue of Julive is here.
        <br />
        A marble statue of Maelstrom is here.
        <br />
        A marble statue of Nycholas is here.
        <br />
        A marble statue of Darkwood is here.
        <br />
        A marble statue of Gryleth is here.
        <br />
      </Characters>
    </Room>
  </Layout>
);

export default HallOfMemory;
