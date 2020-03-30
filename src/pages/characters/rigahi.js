import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Rigahi = () => (
  <Layout>
    <SEO title="Rigahi" />
    <Room>
      <h1>Rigahi Rediron</h1>
      <p>
        A rather large dwarf of five feet is clad in thick armor that is covered
        with black soot. His thick red hair has streaks of grey and is tangled
        and knotted, it is covered with a large black helmet. His clear bright
        blue eyes have the look of many years of life of wisdom and battle. His
        broad nose is scarred and bent slightly to the right. Underneath his
        nose is a moustache that is the same color of his hair though the grey
        is more evident and profound. The moustache goes down to his chin where
        it is braided into three different long braids that are held together
        with small bits of leather string. His face is solemn with a
        concentrated look of determination. Very large broad shoulders hold his
        soot smeared armor and is covered with large dents and deep scratches. A
        large tattoo of a flaming hammer is on the left side of his neck. Around
        his waist is a black leather belt that holds his array of weaponry that
        he uses at his disposal. A gleaming battleaxe with a spike at the end of
        it and a large heavy looking spiked mace. Below his belt are some crude
        looking leggings tattered from long use. His body is slightly
        disproportionate to the rest of his body, his torso being larger than
        his short stubby legs. Deep lines and wrinkles of old age crease his
        face, he has a tired look in his eyes and his face solemn he looks to
        have had many years of life and battles, though none the less a fearsome
        looking warrior.
        <br />
        On his left bicep is a slightly faded tattoo of a Dagger with the word
        'Honor'. His right bicep holds a tattoo slightly faded tattoo as well, a
        Broadsword named 'Courage'. Starting on his right hand and traveling up
        his forearm is a might WarHammer wreathed in black flames. A perfectly
        colored and detailed tattoo of a double-bladed BattleAxe, shining steel
        with a handle of mithril intertwined with gold. On his back is a rather
        large tattoo of a severed spine with skull attached of a Magi. His left
        cheek is a Battleaxe that glows a bright emerald green and occasionally
        flares brightly. On the skin above his heart is a tattoo of a fiery
        dragon with the letter "C", almost attached to it is another tattoo, a
        bleeding heart gripped tightly by a hand.
      </p>
      <Exits>
        <Link to="/valhalla/keep/chamber-of-decisions">
          The Chamber of Decisions
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Rigahi;
