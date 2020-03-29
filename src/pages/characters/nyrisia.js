import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import {
  Equipment,
  Ring,
  Torso,
  Brand,
  TwoHand,
  Orb
} from "../../components/equipment";

const Nyrisia = () => (
  <Layout>
    <SEO title="Nyrisia" />
    <Room>
      <h1>Lady Nyrisia</h1>
      <p>
        An odd looking drow, she bares bubbly white skin, with her eyes gazing
        balefully about her through small red irises. Her white hair sways and
        twirls. You realize that the bubbly skin and twirling hair is a natural
        result of Nyrisia's body being composed of millions of swirling spheres.
        They gleam a whitish color, dancing together to an unheard song. Each
        sphere, upon closer inspection, holds an image within it, a moment
        frozen in time. Images span from events like the release of Xurinos to a
        large duck with teeth lunging at the Spectre of the Conclave. Some
        spheres are not quite part of her body, hovering fingers away in perfect
        tune to the others. Overall, she is slender of build, elegant and
        refined in her manner and bearing. Her typical expression is one of
        haughtiness with a certain measure of arrogance. Her everyday attire is
        a set of long flowing robes made of glossy white silk, that swirl around
        her as she moves. The robes cover her from neck to wrist to toe, as she
        is quite conservative in her style. On her brow is a silver circlet set
        with a single large ruby, and a matching ring adorns her left hand. Her
        long white hair is worn loose, hanging down past her shoulders. She
        bears but one weapon and also a wand of carved ivory inlaid with silver,
        with a blue- black gemstone at the tip. She also carries an ornate
        walking stick with a large knob-handle of engraved silver, and a tapered
        shaft of polished ebony.
      </p>
      <p>
        <Equipment name="Nyrisia">
          <Ring>(Shifting Aura) a golden ring with a large round ruby</Ring>
          <Torso>a blue-green sash made of silk</Torso>
          <TwoHand>
            a walking stick with a carved dragon head at the tip
          </TwoHand>
          <Brand god="nyrisia" />
          <Orb>a glowing purple orb</Orb>
          <Orb>a starry silver orb</Orb>
          <Orb>a clear silver orb</Orb>
          <Orb>a shifting green orb</Orb>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/banquet">The Banquet Hall</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Nyrisia;
