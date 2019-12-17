import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Rihasixis = () => (
  <Layout>
    <SEO title="Rihasixis" />
    <Room>
      <h1>Rihasixis the master smith</h1>
      <p>
        The ability of draconians to withstand great heat serves this master
        smith well in this huge forge. His scaley skin is as polished jet,
        scattering the light of the forge fires in chromatic hues. The size of
        the hammer he uses gives you an idea of his strength; it seems to be a
        mythic blend of adamant and mithril, with a crystal head that amazingly
        does not shatter with the heavy blows it imparts on steel.
      </p>
      <Exits>
        <Link to="/valhalla/keep/forge">The Crusader Forge</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Rihasixis;
