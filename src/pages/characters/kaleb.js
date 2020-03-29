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
  Shield,
  Wielded
} from "../../components/equipment";

const Kaleb = () => (
  <Layout>
    <SEO title="Kaleb" />
    <Room>
      <h1>Lord Kaleb</h1>
      <p>
        Standing before you is a huge giant radiating a powerful aura. He is
        easily 15 feet in height. You can see little of his actual body as it is
        covered in an unusual looking armor. Made of a material the like of
        which you have never seen before, it is exactly half black and half
        white. The most noticeable feature of the armor is that the black is the
        darkest, emptiest blackness you have ever beheld and the white is nearly
        blinding in its radiance. Looking into his eyes, you see a tumult of
        energy seething beneath the visor that covers his face as if there is a
        constant conflict going on within the armored form. His movements are
        noiseless as if his presence is simply in your mind and not at all based
        in the physical world. Still, you can feel the energy radiating from
        him. The white portion of his armor has dark veins running through it as
        though the dark side of the armor was...invading the white side.
      </p>
      <p>
        <Equipment name="Kaleb">
          <Ring>(Glowing) (Humming) The Ring of Eternal Darkness</Ring>
          <Ring>(Glowing) (Humming) The Ring of Neverending Light</Ring>
          <Neck>(Glowing) (Humming) Duality</Neck>
          <Torso>(Glowing) (Humming) The Armor of Light and Darkness</Torso>
          <Head>(Glowing) (Humming) A black and white helm</Head>
          <Shield>
            (Glowing) (Humming) A shield with a lion's head split down the
            middle
          </Shield>
          <Wielded>(Glowing) (Humming) The Unity Device</Wielded>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/parliament">Parliament</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Kaleb;
