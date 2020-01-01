import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Splythe = () => (
  <Layout>
    <SEO title="Splythe" />
    <Room>
      <h1>Splythe</h1>
      <p>
        Should you happen to catch a glimpse of Splythe, you'ld notice he stands
        roughly 6 feet tall. With his long silver hair hanging to his shoulders,
        his face is not unattractive. And his lavender eyes illuminate his sharp
        features. His build is slender, but strong, and he walks with a sort of
        grace, like that of a dancer. There is a certain alertness to him as
        well, he seems to be looking, if not seeing, everything. His gaze sweeps
        around his surroundings looking for any sign of trouble. He dresses
        lightly and in dark clothing. Preferring black cloaks to more blend into
        the shadows. And he wears his cloak well enough to conceal his weapons
        and armor, so that he has a more casual look so as not to draw unwanted
        attention. And in his profession, any attention is unwanted.
      </p>
      <Exits>
        <Link to="/valhalla/casino">The Casino</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Splythe;
