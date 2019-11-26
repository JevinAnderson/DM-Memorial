import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Valhalla = () => (
  <Layout>
    <SEO title="Valhalla" />
    <Room>
      <h1>Valhalla</h1>
      <p>
        A golden hall lies at the end of the path. Resplendent with the glow of
        divine power, the hall is a massive structure. It's golden gates are
        large enough to easily accommodate even the largest of the storm giants.
        The question of how to open the massive gates is rendered pointless as
        you approach. They swing open of their own accord. The inviting glow
        from within beckons you to continue your journey.
      </p>
      <Exits>
        <Link to="/valhalla/hall">north</Link>
        <Link to="/valhalla/">south</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Valhalla;
