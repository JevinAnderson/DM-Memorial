import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import {
  Equipment,
  Torso,
  Head,
  Legs,
  Feet,
  Arms,
  Wielded,
  DualWielded
} from "../../components/equipment";

const Kagemusha = () => (
  <Layout>
    <SEO title="Kagemusha" />
    <Room>
      <h1>Kagemusha the Samurai Guardian</h1>
      <p>
        Kagemusha, the last standing of his clan, sought the employment of a
        honorable house and found it here. He is covered with scars of wounds
        inflicted from the night raid of the Bloodmoon Ninja clan. Though all
        his clan perished in the raid, he cut down all 113 ninjas sent.
        Kagemusha stands in full ornament-ed samurai armor. It is very flexible
        and it carries patterns of blue flying dragons all over it. His eyes
        seem to pierce into you through the red battle mask under his helmet. He
        wields both a katana and a wakizashi with deadly grace.
      </p>
      <p>
        <Equipment name="Samurai">
          <Torso>
            (Sticky) A sturdy Do covered with patterns of blue flying dragons
          </Torso>
          <Head>
            (Sticky) A fierce looking Mempo and Kabuto lacquered in red
          </Head>
          <Legs>
            (Sticky) A strong pair of Sune-Ate in red and blue patterns
          </Legs>
          <Feet>(Sticky) A sturdy set of black Waraji</Feet>
          <Arms>(Sticky) A pair of Sode laced in red and blue</Arms>
          <Wielded>(Sticky) wakizashi named Honorable Death</Wielded>
          <DualWielded>(Sticky) katana named Sword of Doom</DualWielded>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/keep">The Keep</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Kagemusha;
