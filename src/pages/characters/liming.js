import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Liming = () => (
  <Layout>
    <SEO title="Liming" />
    <Room>
      <h1>Liming the monk</h1>
      <p>
        Liming stands with his arms folded in meditation. You can see by the
        flying crane tattoo on his forearm which school he comes from. His frame
        is small but well toned. Liming executes his stances with fluidly
        perfect grace. His punches whistle in the air with lightning speed. His
        healing has been known to aid his fellow Crusaders in their honorable
        fight. All his sisters and brothers need to do is say, 'Aid me, monk'
        and his healing is theirs.
      </p>
      <Exits>
        <Link to="/valhalla/keep/battle-room">The Battle Room</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Liming;
