import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import { Equipment, Ring, Held, Brand } from "../../components/equipment";

const Riallus = () => (
  <Layout>
    <SEO title="Riallus" />
    <Room>
      <h1>Lord Riallus</h1>
      <p>
        A cold wind suddenly gusts around you, chilling your bones. You feel as
        though you are watched. Suddenly, a portal bursts open before you.
        Swirling with chromatic nothingness, you see visions of places that
        were, places that are and places that will be. Deep within the portal
        you see movement. A shadow moving closer to you. Soon you are able to
        see it is a being that is making its way closer to the portal's edge. It
        is a man.
        <br />
        The figure steps through the portal, which quickly vanishes as he
        arrives. He is the Lord of Neutrality and Patron of the Magi, Riallus
        WindGust. He quickly surveys his surroundings, nodding with slight
        pleasure that he has arrived where he intended to go. He glances briefly
        at you and smiles, his eyes alighting with slight interest on your
        weapon.
        <br />
        Standing a shade over six feet in height, he is quite awe-inspiring.
        Wearing a royal blue robe that extends from his shoulders to his feet,
        he wears a belt around his waist that holds various gadgets, dodads,
        thingamabobs and whatnots. All items needed in his profession. Around
        his neck, a black cloak with red interior that glows as it stirs around
        him in a chilling breeze. Also around his neck, a pendant that seems to
        cast an eerie, revealing light on all things he looks at.
        <br />
        He begins to speak, his voice is strong and clear, but with a touch of
        hoarseness, most likely from calling to the magical forces for years. He
        speaks in a tone that puts you at ease, like the musings of an old
        friend. He proceeds with his business in an efficient way, being as
        polite as possible for as long as possible. His business concluded, he
        turns from you, rolls up his sleeves and lifts his arms into the air.
        <br />
        He begings to chant, slowly at first, then with increasing volume and
        speed. At the culmination of his casting, a freezing gust of wind swirls
        around him, and with a brilliant flash of light he is gone.
        <br />
        Off to another place, perhaps another time, to continue his work.
      </p>
      <p>
        <Equipment name="Riallus">
          <Ring>(M) the Mayor's signet-ring</Ring>
          <Ring>(M) the Mayor's signet-ring</Ring>
          <Held>(Humming) a white wand</Held>
          <Brand god="riallus"></Brand>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/tower">The Tower</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Riallus;
