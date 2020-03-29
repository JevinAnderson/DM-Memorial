import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import { Equipment, Body, TwoHand, Brand } from "../../components/equipment";

const Xurinos = () => (
  <Layout>
    <SEO title="Xurinos" />
    <Room>
      <h1>Lord Xurinos</h1>
      <p>
        Something tickles in the back of your mind, pressing in at the edges, as
        your gaze settles upon the visage of an old drow mage. His ebony skin is
        slightly wrinkled, indicating great age, as few drow show their years
        even unto death. The jaw is sharp, his cheeks angular and gaunt. A
        silvery white mustache suspends to the left and to the right, just
        beyond the cheek bones, before dropping downward in parallel with an
        equivalent length beard. The bearded ensemble looks something like a
        trident pointing downwards with his sharp nose as its haft. Above both
        eyes are silvery white eyebrows, angled slightly upward towards the far
        sides, like a hawk with wings spread. The eyes are white without pupils,
        overlaid by a hazy glow of brilliant blue that shifts at times to dark
        green. When Xurinos turns his head, the colored haze trails behind the
        eyes before settling at their stop. Silvery white hair flares out from a
        central part at the top of his head, thickly trailing down either side
        of his face and partway down his chest. The drow is sometimes tall and
        sometimes small.
        <br />
        The old drow wears voluminous robes that shift colors from blue to green
        at moments out of synchronization with his eyes. Sometimes the color on
        the robe is so dark that your eyes are drawn into an endless depth, as
        if the Void itself is revealed in its cloth folds. Both sleeves billow
        outward, draping over Xurinos's thin arms. One hand holds a gray, wooden
        staff with a small, gray dragon mounted at the top, made from a material
        akin to metal. The dragon is never the same when you look at it twice,
        always assuming a different pose and shade of gray. Xurinos leans upon
        the staff, requiring its aid to remain upright.
        <br />
        Power emanates from the ancient one. You are filled with a sense of many
        millennia of experience and a fear of a perception beyond mortal
        measure. However, the power is unfocused, drifting, unstable in its
        outward push, and Xurinos often gazes at things elsewhere. A kind of
        madness flows through the power, and your mind at times loses its focus,
        leaping off track.
      </p>
      <p>
        <Equipment name="Xurinos">
          <Body>
            (L) (Glowing) (Pulsing) (Sticky) a voluminous dark-blue and green
            robe
          </Body>
          <TwoHand>
            (L) (Pulsing) (Sticky) a gray, wooden staff with a dragon ornament
          </TwoHand>
          <Brand god="xurinos"></Brand>
        </Equipment>
      </p>
      <Exits>
        <Link to="/404">The Void</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Xurinos;
