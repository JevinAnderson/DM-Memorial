import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import { Shadowy } from "../../components/auras";
import { Equipment, Body, Wielded, ForGlyph } from "../../components/equipment";

const Jeriath = () => (
  <Layout>
    <SEO title="Jeriath" />
    <Room>
      <h1>Lord Jeriath</h1>
      <p>
        Tall, long-limbed and thin, this creature does not so much stand as he
        does hover, poised in his postion as if ready to move. A smooth, almost
        featureless face sits atop his lanky frame, connected to a long neck.
        His eyes are black and pupil-less, and darkness swirls behind them. The
        rest of him is no less strange. His skin is a light-grey in color and is
        completely smooth. What can be seen of his exposed flesh is hairless, as
        well. His body is covered in constantly shifting shadows, at times
        obscuring his features, other times drifting away from him to swirl
        about on the ground. An aura of cold seems to emanate off of him, a
        chill that bores to the soul. Jeriath is in perfect condition.
      </p>
      <p>
        <Equipment name="Jeriath">
          <Body>(Pulsing) (Sticky) a cloak spun from shadow</Body>
          <Wielded>
            (Pulsing) (Sticky) <Shadowy /> a sword named 'Manipulation'
          </Wielded>
          <ForGlyph>a Coin with Two Swords crossed behind it</ForGlyph>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/banquet">The Banquet Hall</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Jeriath;
