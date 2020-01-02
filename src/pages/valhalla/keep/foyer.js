import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";

const Foyer = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>Foyer to the Altar Room</h1>
      <p>
        The Roman arches continue from the Inner Keep, gracefully overlooking
        this quiet spot. The granite floor below has been polished to near
        mirror shine. Suits of armor decorate the north and south walls, and in
        between those suits a colorful shield representing a family which has
        given several generations of honorable warriors to the service of the
        Crusade. They are colorful, but most are badly dented and one shows
        signs of scorching. The walls near the Inner Keep are covered with
        haphazard blood stains in the shape of human hands, some overlapping.
      </p>
      <Exits>
        <Link to="/valhalla/keep/altar">east</Link>
        <Link to="/valhalla/keep/inner-keep">west</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Foyer;
