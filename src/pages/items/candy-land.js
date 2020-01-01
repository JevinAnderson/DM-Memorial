import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const CandyLand = () => (
  <Layout>
    <SEO title="CandyLand" />
    <Room>
      <h1>Portrait of CandyLand</h1>
      <p>
        A magical portrait of a land of candy hangs on the wall. Images of a
        land filled with delicious delights shifts and changes before your eyes.
        Flocks of dragons made of candy fly through the air, swirls of pixie
        dust trail behind them. Forests of large green trees with cookies for
        fruits and elves picking the cookies dot the lands. A river of chocolate
        milk rushes quickly as it splits the land. A large cookie mountain looms
        in the distance.
      </p>
      <Exits>
        <Link to="/valhalla/tower">The Tower</Link>
      </Exits>
    </Room>
  </Layout>
);

export default CandyLand;
