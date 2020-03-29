import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import { Equipment, Brand } from "../../components/equipment";

const Huerkin = () => (
  <Layout>
    <SEO title="Huerkin" />
    <Room>
      <h1>Lord Huerkin</h1>
      <p>
        Tongues of darkness and purple flame lick along the body of this being
        of utter darkness. His body barely holds a physical form. Looking into
        it is like gazing into darkness so deep that if one stares at it for too
        long will find his mind slipping away into the utter darkness. Eyes can
        be seen flicking open and closed across the entire body of darkness.
        Each movement is just a flowing of the black and purple flames. The arms
        and legs appear to melt and rematerialize without ever moving. Strange
        mouths with soul-shaking laughter, in all its shapes and forms, appear
        at random, lined with teeth sharper than diamonds. There is no face, no
        features at all. Just the ever gazing eyes and hideous laughter.
      </p>
      <p>
        <Equipment name="Huerkin">
          <Brand god="huerkin"></Brand>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/banquet">The Banquet Hall</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Huerkin;
