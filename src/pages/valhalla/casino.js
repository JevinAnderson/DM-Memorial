import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Casino = () => (
  <Layout>
    <SEO title="The Casino" />
    <Room>
      <h1>The Casino</h1>
      <p>
        You stand within an enormous casino. Roulette wills, card tables, and
        bars are everywhere. The crowd is rowdy and drunk. Members of Outlaw,
        Syndicate, and Marauder mingle with each other in friendly comradery.
        Laughter can be heard often as some player busts at blackjack or spills
        their drink. Lord Malignus can be seen walking the floor, occasionally
        stopping to speak with an old acquaintance here and there. Lord Fastolph
        tends his own excellent bar, and has a steady smile as he serves perfect
        drinks and listens to his friend's outrageous claims and wildly
        exaggerated exploits.
      </p>
      <Exits>
        <Link to="/valhalla/hall">east</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Casino;
