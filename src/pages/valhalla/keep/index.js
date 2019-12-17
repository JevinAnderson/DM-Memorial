import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import Characters from "../../../components/characters";
import { Link } from "gatsby";

const Keep = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Gates of Castle Balkra</h1>
      <p>
        A stone road leads to the massive structure of Castle Balkra. The
        gigantic iron gates which lock the outer keep are swung wide open. The
        hardened stone walls of the castle loom about three to four stories.
        Battle runes and mottos are inscribed within the front stone walls. From
        this spot four large towers can be seen jutting out of the four corners
        of the castle. On each tower a Crusader banner whips in the winds. The
        stone blocks forming the thick structure of the outer castle gleam white
        in either sunlight or moonlight. If you're an intruder your awakening is
        a rude one if the Samurai guardian is present to deliver a devastating
        assault.
      </p>
      <Exits>
        <Link to="/valhalla/keep/hall-of-memory">east</Link>
        <Link to="/valhalla/hall-4">west</Link>
      </Exits>
      <Characters>
        <Link to="/characters/kagemusha">
          A fierce samurai in battle armor patrols the Crusader castle grounds.
        </Link>
      </Characters>
    </Room>
  </Layout>
);

export default Keep;
