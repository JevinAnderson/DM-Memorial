import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Dohgin = () => (
  <Layout>
    <SEO title="Dohgin" />
    <Room>
      <h1>Dohgin Makato</h1>
      <p>
        Standing here in a dirty black kimono is a disheveled oriental human
        male. His hair which is long and unkempt is bound only in a loose
        warriors knot at the back of his head. He is old, even by human
        standards, possibly 60 winters. He has a short scruffy beard that only
        ads to his transient state of being. However, at his waist he carries a
        finely crafted katana and wakizashi within easy reach. Upon his back is
        a long slim samurai sword in a fine bamboo and silk sheath. He silently
        looks up at those around him always looking them in the eyes and nods in
        greeting. The look on his face is quite stern, and he speaks in short
        heavily accented common.
        <br />
        He seems to have not bathed in a ten-day as his feet and hands are dirty
        from the road, and he still has grass and leaves on his cloths from
        laying about. But the small donkey that he is leading about is laden
        with his red Akayoroi Bushido armor, which is polished to a glossy sheen
        and his bright sashimono flag gently blows in the wind that gives
        testimony to his Bushido lifestyle.
        <br />
        ++His long hair is now white with age.++
        <br />
        +++His once dark eyes are now opaque and white with blindness.+++
        <br />
        ****Upon his forehead he is branded with the yin and yang of Kaleb****
        <br />
        * Upon his arm is a long curved Dagger, it is honed to a keen edge.*
        <br />
        ***Upon his upper back is a tattoo of a warhammer, it is entwined with
        blue roses***
        <br />
        *****Upon his stomach is a tattoo of a wide battleaxe, it is surrounded
        with ivy*****
        <br />
        **********Upon the back of his neck is a tattoo reading
        Warlord**********
        <br />
        ********** Upon his back in ancient runes is a tattoo of the word
        "LEADER" ***********
      </p>
      <Exits>
        <Link to="/valhalla/keep/chamber-of-decisions">
          The Chamber of Decisions
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Dohgin;
