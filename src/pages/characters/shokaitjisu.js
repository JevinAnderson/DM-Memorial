import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Shokaitjisu = () => (
  <Layout>
    <SEO title="Shokaitjisu" />
    <Room>
      <h1>The Spirit of the Wildcat</h1>
      <p>
        Ethereal in form, this figure wanders the city in search of magic users
        to kill. At one time the Warlord Shokaitjisu, a monk of the School of
        the Tiger, he fought honorably to eradicate mortal magic from Thera. Now
        long dead, but not satisfied with the current state of Thera vis-a-vis
        mortal magic, he is back to continue his lifework, now as an after life
        work. Though today's mages do not remember him, the Wildcat is back.
      </p>
      <Exits>
        <Link to="/valhalla/keep/chamber-of-decisions">The Chamber of Decisions</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Shokaitjisu;
