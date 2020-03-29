import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Gryleth = () => (
  <Layout>
    <SEO title="Gryleth" />
    <Room>
      <h1>Lord Gryleth</h1>
      <p>
        Cut from the hard rock of Thera, before you stands a member of the
        hearty race of Dwarves. Quite possibly drunk, the being before you is
        plainly adorned as you see him. Drooping down from his forge-darkened
        face is a roughly cropped, waist length beard of silvery grey striated
        with veins of coal black and fiery red. With so much grey apparent, this
        is a rather aged being. Protruding from the chin of this....ruffian are
        two well groomed braids of long facial hair. Now noticing his piercing
        blue eyes, your sight shortly lingers on a faded tattoo of a hammer and
        anvil. Perhaps this faded tattoo might be an indication as to why his
        braids are always tucked behind his ears. The blood of an enemy is not
        conducive to good personal grooming. You can't help but notice a
        decidedly grumpy air about this one. Talk about one damn grumpy dwarf...
      </p>
      <Exits>
        <Link to="/valhalla/keep/bar">The Crusader Bar</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Gryleth;
