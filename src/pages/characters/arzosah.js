import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import {
  Equipment,
  Ring,
  Neck,
  Torso,
  Head,
  Arms,
  Hands,
  Body,
  Legs,
  Shield
} from "../../components/equipment";

const Arzosah = () => (
  <Layout>
    <SEO title="Arzosah" />
    <Room>
      <h1>Lady Arzosah</h1>
      <p>
        The light seems to intensify slightly as a towering creature glides into
        your view: a great wyrm with immense wings unfolded, surrounded by a dim
        yet barely perceptible radiance. The ephemeral iridescence shrouding
        this draconic form shifts readily from antiquated silver to
        greenish-black and then back again; the transition appears seamless to
        the wandering eye.
        <br />
        Her curled tail tends towards midnight blue whilst her head, body and
        wings are covered in limber but tenacious scales more the shade of
        bright copper, like the last glow of the sun before it sets. A roundish
        flap of brown-speckled skin envelops a sinewy neck and extends outwards
        in a protective circle. Razor- sharp, spiny projections run from her
        curved nose, along the back and towards the slant of the spade-shaped
        tail. The front and rear legs are slim yet strong and end in pointed
        claws resembling those of an eagle's talons. A square of ebony cloth is
        draped across her shoulder blades, fastened by a golden clasp. A smaller
        square of crimson on the black cloak holds the sigil of a bright round
        disc, a stylized representation of a full moon. She wears the cloaks
        with an autocratic grace as they seem to move about her with a
        mysterious will of their own.
        <br />
        The winged figure is devoid of ornaments save for a brilliant gemstone
        situated slightly above her eyes; the ruby-red colour of the half-dome
        shaped corundum is exceptionally vivid.
        <br />
        Her eyes speak volumes to you. With the grace of the turning stars, you
        catch a glimpse of the gleaming spark in those tourmaline orbs, serene
        yet ablaze with fervor and wonder.
      </p>
      <p>
        <Equipment name="Arzosah">
          <Ring>the Cipher of the Wyrms</Ring>
          <Ring>the Seal Lorezohaz</Ring>
          <Neck>(gifted) a string of morrigu feathers</Neck>
          <Neck>(gifted) a mystic amulet</Neck>
          <Torso>Aegis</Torso>
          <Head>(Frozen) memories of Autumn</Head>
          <Legs>(Swirling) the Mists of the Nexus</Legs>
          <Hands>(Humming) Blessed Gauntlets of Time</Hands>
          <Arms>(Glowing) the Coils of the Spiral</Arms>
          <Shield>(Reflecting) a pyramidal mirror shield of Solitude</Shield>
          <Body>(Iridescent) a cloak with a sigil of the Moon</Body>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/banquet">The Banquet Hall</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Arzosah;
