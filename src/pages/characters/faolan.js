import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Faolan = () => (
  <Layout>
    <SEO title="Faolan" />
    <Room>
      <h1>Faolan Chroi</h1>
      <p>
        In front of you is a human male, standing at an average 6 foot tall. A
        small braid dangles from the side of his short brown hair. His frame
        shows power, but is more lithe than muscular. His eyes seem to shine
        with a determined vigor from inside their sockets. His face shows the
        remains of fading scars and scrapes through it's slightly pale skin,
        though few look to have occurred recently. His chin and jaw are lined
        with a dark trim of facial hair, seemingly kept trim and groomed. His
        exposed limbs are sinewy, suggesting a natural grace, and the placement
        of muscle suggests a man who has been working with his hands a lot.
        <br />
        Under any armor worn, the man wears simple clothing. Nothing to suggest
        aristocracy or anything of that nature, nor anything that looks
        particularly encumbering. Hanging from his neck you can see a small
        charm, though closer inspection reveals it is actually merely a piece of
        a charm, cracked and faded to the point of being impossible to discern
        any design from.
        <br />
        On his upper right arm sits a tattoo of a DAGGER with a wavy blade,
        drawn in black ink. The hilt of the dagger resembles the scales of a
        dragon. The dagger sits on a slant. Crossing the dagger, in a similar
        style, rests a BROADSWORD. Vertically over the two blades sits a large
        WARHAMMER. The handle of the warhammer crosses, but is visibly above the
        two blades, while the slightly curved head of the hammer sits to the
        left of the blades. Coming down in the middle of the three tattoos rests
        a BATTLEAXE. The blade of the axe sits atop the tattoo, slightly above
        the lines of the two hilts. The middle of the axe handle crosses the
        middle of the hammer, nearly perfectly. The tattoo is framed by two
        large wings, connected by a rolled scroll lying below the tattoo. Across
        the scroll, the word ENVOY is printed. The tattoo seems important, as if
        a symbol of rank.
      </p>
      <Exits>
        <Link to="/valhalla/keep/southeast-tower">The Southeast Tower</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Faolan;
