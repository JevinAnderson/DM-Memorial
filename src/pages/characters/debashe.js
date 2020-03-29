import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Debashe = () => (
  <Layout>
    <SEO title="Debashe" />
    <Room>
      <h1>Debashe O'tari, BloodKnight of Steel and Guildmaster</h1>
      <p>
        Before you is a very powerful dwarf, standing nearly four feet tall.
        From quite a distance you began to hear this powerful dwarf walking in
        your direction. Fully clad in armor, not a single part of his bare skin
        is showing. Looking boldly at you, pitch-black eyes with a glow of
        crimson hatred penetrate the air with a vile glow of determination. A
        full beard falls down towards his breastplate of a charcoal color,
        neatly tied with small beads at its bottom. Grinning widely this dwarf
        always seems to be showing his pearly white teeth. A small jagged scar
        can be seen on his left cheek, perhaps the sweet touch of a sharp blade.
        Wrapped around the hilt of his blade a small figurine can be seen of a
        beautiful golden shade. Seemingly this is something very important to
        this proud dwarf. Black hair cascades out of his sturdy helmet down
        towards the midsection of his back. An aura of power and wisdom radiates
        from this dwarf filling the very air. Across his left forearm you notice
        that of a small dagger slicing through a bloody heart. Running down his
        left arm, under his sleeves is that of a mighty broadsword. Across his
        chest yet another tattoo is seen, this of a powerful warhammer slamming
        down upon the shattered skull of an archmage. Under his left eye, on his
        cheek is a small tattoo of an ancient battleaxe, green in color though
        red at the blade's edge. He wears, strapped to his back, a powerful
        battleaxe named Bane of Magic but uses lesser weapons to help his
        students train.
      </p>
      <Exits>
        <Link to="/valhalla/keep/southwest-tower-top">
          The Top of the Southwest Tower
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Debashe;
