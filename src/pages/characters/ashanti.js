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
  Wrist,
  Body,
  Waist,
  Shield,
  Wielded
} from "../../components/equipment";

const Ashanti = () => (
  <Layout>
    <SEO title="Ashanti" />
    <Room>
      <h1>Lord Ashanti</h1>
      <p>
        Before you stands a slender looking figure whom has a firm build. A
        white light erupts from within a large white cape which is wrapped
        around him. The light covers the area, and is quite pleasing to the eye.
        He stands approximately six feet tall, and he appears to be very
        human-like. His figure seems to flow and move rather smoothly. His hair
        is a glimmering silver and it hangs down to the middle of his back. His
        eyes are sky blue, and they fall ever so gently to each side giving him
        a relaxed and comforting look. His nose is not too big and not too
        small, but most perfect. A confident smile is strewn across his face.
        His complexion is dark, and his skin is a dull bronze color. His ears
        are somewhat large and his silver hair is tucked behind them. His
        shoulders are broad and his arms and chest are well-defined. His finger
        nails are neatly trimmed and he is well-shaven. He stands in a relaxed
        posture with his arms crossed and one foot planted forward.{" "}
      </p>
      <p>
        <Equipment name="Ashanti">
          <Ring>
            (Glowing) (Humming) a gold ring inscribed with the word 'Devotion'
          </Ring>
          <Ring>
            (Glowing) (Humming) a silver ring inscribed with the word
            'Determination'
          </Ring>
          <Neck>(Glowing) a bright white cloak</Neck>
          <Neck>(Glowing) a bright white cloak</Neck>
          <Shield>
            (Glowing) a shield engraved with the Darksbane code of arms
          </Shield>
          <Body>(Glowing) (Humming) a robe of light</Body>
          <Waist>(Glowing) (Humming) a white cloth belt</Waist>
          <Wrist>(Glowing) a bracelet woven from unicorn hair</Wrist>
          <Wrist>(Glowing) a bracelet woven from unicorn hair</Wrist>
          <Wielded>
            (Glowing) (Humming) (Pulsing) a silver-plated whip named
            'Preservation'
          </Wielded>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/banquet">The Banquet Hall</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Ashanti;
