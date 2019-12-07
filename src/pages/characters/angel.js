import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Angels = () => (
  <Layout>
    <SEO title="Angels" />
    <Room>
      <h1>Ivory Angels</h1>
      <p>
        Two angels carved of ivory stand guard at the entrance to the
        crystalline dome. Huge wings carved of ivory extend up and behind the
        angelic sculptures. At first silent and still, they suddenly come to
        life, watching you. Their heads turn, their ivory eyes burn holes into
        your very being as they assess the goodness, or lack of goodness, in
        your soul.
      </p>
      <Exits>
        <Link to="/valhalla/dome">The Dome</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Angels;
