import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Terius = () => (
  <Layout>
    <SEO title="Terius" />
    <Room>
      <h1>Terius</h1>
      <p>
        A very well-defined musculature marks this cloud giant as an adventurer.
        Likely of one of the fighting guilds, unless you miss your guess. His
        head is shaved completely bald, save for a topknot situated toward the
        rear apex of his skull. From there, long white hair issues forth down to
        his shoulders. He has the pale skin of most of his race, marred in
        several spots by scars, a common affliction among adventurers. His eyes
        are a faint blue, the color of extremely shadow water in a snowy valley.
        His face has a grim cast to it but his features are well-formed and
        quite symmetrical. It is said that the Cloud Giant villages and
        gathering places do not have such things as performers, but the beauty
        of this male is definitely striking. Added to the thick slabs of muscle
        he has gained from his adventures, he makes quite an impression on any
        that look upon him.
        <br />
        Etched neatly upon his right arm you notice an ornate dagger of simple
        make.
        <br />
        Etched carefully upon his left arm is a simple broadsword of elven make.
        <br />
        Etched onto the side of his neck you notice a bunny wielding a massive
        warhammer.
        <br />
        Looking at his left ear you can see where a blue rose has been etched
        into it.
        <br />
        Etched into his bald head like a crown you see the image of a battleaxe.
      </p>
      <Exits>
        <Link to="/valhalla/keep/green-room">The Green Room</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Terius;
