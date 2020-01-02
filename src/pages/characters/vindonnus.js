import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Vindonnus = () => (
  <Layout>
    <SEO title="Vindonnus" />
    <Room>
      <h1>Vindonnus StoneEdge, BloodKnight and Missionary of Steel</h1>
      <p>
        A large figure stands here, his form broad and tall. His skin is dark
        green, reminding one of the colour of an evergreen. Black hair grows on
        top of his head, on closer inspection his hair appears to look more like
        moss. His face is clean shaven, with a scar of singed flesh jutting down
        from his right temple to the edge of his jaw. Sapphire eyes look out at
        the realms, filled with a sense of resolve and conviction. Arching over
        his eyes are black eyebrows, they too seem to be a moss-like. Hanging
        around his muscular neck is a medallion imprinted with the signature of
        the BloodKnights of Steel. Massive arms hang to his sides, both
        appearing very muscular. A dagger tattoo is on his left forearm, the
        hilt starts just above his wrist and the tip points upward to his bicep.
        The dagger is seven inches long. The hilt has a swirled design, mixing
        ivory white with deep-red. The blade itself is very slender and tinted a
        steely blue. A broadsword tattoo is on his right forearm. The hilt of
        the broadsword starts at his wrist, the tip of the blade reaches to his
        elbow. A dark-brown leather wrapping with a webbed design is what you
        see on the hilt. Written in red ink the words “Honour” and “Battle” are
        on each side of the blade; the blade itself is a steely blue colour. His
        torso is massive, very well-defined muscle. When you catch a glimpse of
        his back, you see well-defined muscles, but you also take note of a
        tattoo. A War hammer is tattooed on the width of his back, the handle
        beginning on his left shoulder, and the double-sided hammerhead on his
        right. The handle is colored a dark-brown, with the grains of the wood
        in the design. The hammerhead itself, is large, and steely-grey in
        colour; scribed onto the head in red ink are the words “Natural Order”.
        Tree-trunk legs carry this man, his feet planted firmly into the ground.
      </p>
      <Exits>
        <Link to="/valhalla/keep">The Keep</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Vindonnus;
