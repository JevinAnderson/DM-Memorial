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
  Wielded,
  Line,
  Lure,
  DualWielded,
  Brand
} from "../../components/equipment";

const Isimsiz = () => (
  <Layout>
    <SEO title="Isimsiz" />
    <Room>
      <h1>Lord Isimsiz</h1>
      <p>
        A hideously deformed purple oozing mass of slime, rot and mold floats
        here absorbing light, heat, and emotion from its environment. It appears
        about the size of a large human but lacks any defined form. A bulbous
        and amorphous blob, the...thing feasts on any positive energy that comes
        within close contact. A strange black aura of pure hatred surrounds this
        bizarre amalgamation of a creature. While its physical form lacks much
        in the way of definition, a bulbous head periodically appears, revealing
        a pair of yellow-ish white creamy eyes, about the size of a dragon's
        nostril. Just below the "eyes", several writhing slimy tentacles with
        shark like razor-edged teeth form around a beak shaped "mouth". As the
        creature moves, other vague shapes appear and disappear within the ooze:
        a pair of skinny appendages with hooked claws, perhaps "arms", and
        tattered wings, propeling the mass from place to place. A sickening
        squishing sound is heard whenever it moves, followed by a hollow
        crunching sound, as if a giant were gnaw- ing on some bones.
        Occasionally as the form shifts, various clothing becomes evident that
        might fit on different normal body parts of a bi-pedal creature: a
        purple cloak of freeze-dried elf veins, a warped and cracked shell of an
        enchanted ancient tortoise, and various other things catch your eye.
        Those who continue to look at it too long will surely experience a
        growing sense of sheer terror overwhelming their senses as their hopes
        and dreams, along with any will to go on living eventually slip away.
      </p>
      <p>
        <Equipment name="Isimsiz">
          <Torso>(Tainted) (Black Aura) The Shroud of Eternal Darkness</Torso>
          <Head>
            (Humming) (Tainted) (Wailing) a swirling circlet of endless
            tormented souls
          </Head>
          <Wielded>
            (Humming) (Tainted) (Undetectable) A yawning and bottomless black
            hole
          </Wielded>
          <Line>a thin coil of preserved griffon guts</Line>
          <Lure>(Glowing) (Humming) a still-quivering elf brain</Lure>
          <DualWielded>
            (Humming) (Tainted) (Colorless Aura) the siphon of eternal depletion
          </DualWielded>
          <Brand god="isimsiz" />
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/cave">The Cave</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Isimsiz;
