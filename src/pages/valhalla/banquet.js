import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import Characters from "../../components/characters";

const Banquet = () => (
  <Layout>
    <SEO title="Banquet Hall" />
    <Room>
      <h1>The Banquet Hall</h1>
      <p>
        You've entered a massive banquet hall. Thousands of people sit around
        tables set throughout the room. Here is where those who never joined a
        great house congregate. Not all adventurers are created equal, and many
        never had the skills needed to serve. Some wished not to be bound to the
        strict rules of those houses. For instance, members of the notorious
        clan Dominion have their own table now. For their acts in life one might
        assume animosity from others here, but none exists. What deeds came
        before don't matter now. Perspective here is crystal clear. Stories are
        told, songs are sung, poetry recited, and the memories remain. For all
        the bad, there was a lot more fun. Dungeons were crawled, formulas were
        learned, dragons were slain, and time was wasted beautifully. At the
        head of the hall, many of the greatest divinities sit at their own
        table. Occasionally they are approached, and are friendly with the
        mortals they have looked over for so long. Nyrisia sits smirking while
        listening to boisterous tales from the past. Thrym's toothless grin is
        ever present as he looks around the room. Behind this table, a grand
        ivory spiral stairway to heaven rises from the floor.
      </p>
      <Exits>
        <Link to="/valhalla/hall-4">south</Link>
        <Link to="/valhalla/lemniscate">up</Link>
      </Exits>
      You see a large spiral staircase.
      <Characters>
        <Link to="/characters/nyrisia">Lady Nyrisia is here.</Link>
        <Link to="/characters/cylan">
          (Fiery Aura) (NIGHTMARE) The fearsome hell horse of the hunt is here.
        </Link>
        <Link to="/characters/arzosah">Lady Arzosah is here.</Link>
        <Link to="/characters/tiltan">Lord Tiltan is here.</Link>
      </Characters>
    </Room>
  </Layout>
);

export default Banquet;
