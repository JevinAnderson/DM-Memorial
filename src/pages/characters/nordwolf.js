import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Nordwolf = () => (
  <Layout>
    <SEO title="Nordwolf" />
    <Room>
      <h1>Nordwolf Grayfeather</h1>
      <p>
        Standing before you is a human of average height around six foot two. He
        has shaggy dirty blonde hair his skin is tanned and wind worn from
        roughing it in the outdoors a lot. His eyes which are a smokey blue are
        piercing in their gaze and there is a scar that runs from above his
        right eyebrow straight down over his right eye down to his jaw line. His
        shoulders and chest are broader than most of his race and even though he
        is muscular his muscles are well defined, each defined line of his
        muscles seemingly cut into his skin. He wears minimal clothing to allow
        greater movement, and he walks with a grace most would kill or die for.
        On the back of his hands are twin tattoos of Cranes colored in with
        black and green. Along the inner forearm of his left arm is a bloody
        dagger with a hilt wrapped in green leather. Going down his rigt arm is
        a broadsword outlined in green with a brow n leather handle. Traveling
        up his left arm from the elbow up is a massive tattoo of a Warhammer
        with the head of the Warhammer resting on his bulging bicep. The
        Warhammer itself tinted green with a brown leather handle has "glowing"
        runes upon the haft and Warhammer head. The ones on the haft read Battle
        and Natural Order and the runes on the head read Honor. A tattoo of a
        Battleaxe is on his back, the butterfly blades spreading across his back
        over his shoulder blades. The top points of the butterfly blades reach
        his shoulders, the Battleaxe tattoo is colored in with a light blue
        steel color on the blades, the haft of the Battleaxe colored in with
        green. The handle of the Battleaxe is colored in with black, having the
        appearance of black leather wrapped around the haft of the Battleaxe
        creating the handle itself. The edges of the butterfly blades are dipped
        in red, giving the appearance of blood on the blades. There is a tattoo
        of blue, reading ENVOY scrolling over the right side of his neck in
        flowing script taking up most of the right side of his neck.
      </p>
      <Exits>
        <Link to="/valhalla/keep/library">Library of the Crusades</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Nordwolf;
