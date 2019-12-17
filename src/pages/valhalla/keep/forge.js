import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import Spaces from "../../../components/spaces";
import { Link } from "gatsby";

const Forge = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Crusader Forge</h1>
      <p>
        The tremendous heat almost forces you back out of the room. A blinding
        light of molten metals being poured into casts forces your eyes to
        squint. A large draconian blacksmith and a gnome weapon smith work this
        hellish heated forge in a furious pace. Nearby, a dwarven master smith
        works the bellows and over- looks the work. The clanging of metalwork
        rings throughout the keep, and you see quenching barrels, filled with
        different liquids lining the side of the smithy. A heavy metallic scent
        looms from the various metals being crafted in the forge. A heat wave
        shimmers over the room, distorting your sight. The blast of heat makes
        you sweat, and you almost feel as if on fire. Many fine swords, shields,
        armors, and weapons of every sort crafted here line the walls. A
        cast-iron plaque hangs on the wall near the anvil.
      </p>
      <Exits>
        <Link to="/valhalla/keep/battle-room">east</Link>
      </Exits>
      <Spaces />
      (Glowing) (Humming) A mighty anvil lies here, awaiting the hammer's
      stroke.
      <br />
      <Link to="/characters/rihasixis">
        Rihasixis, the draconian smith, is here.
      </Link>
      <br />
      <Link to="/characters/telchard">
        Telchard, the dwarven mastersmith, is here.
      </Link>
      <br />
      <Link to="/characters/gagglegrog">
        Gagglegrog, the gnomish smith, is here.
      </Link>
      <br />
    </Room>
  </Layout>
);

export default Forge;
