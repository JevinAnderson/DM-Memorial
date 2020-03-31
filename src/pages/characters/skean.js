import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Skean = () => (
  <Layout>
    <SEO title="Skean" />
    <Room>
      <h1>Skean Skolarski</h1>
      <p>
        Nearly three feet tall and six feet long from head to tail, a jet black
        wolf rests on four legs in front of you. Its limbs are long and robust,
        its paws are average in size. His head is very heavy looking and large,
        sitting at a parallel level to his back. His muzzle and jaw is long and
        very strong, sharp bone crushing canine teeth are visible as he pants.
        His triangular shaped ears point upwards at the top of his head, both
        scarred from years of travel and battle. His neck is visibly muscular
        and a shaved area is visible between his front shoulder blades. You
        notice a masterfully designed and inked tattoo upon in the shape of a
        large shield. The shield is small at the bottom and larger at the top
        containing six different sections. At the bottom of the shield in small
        but legible print is the word DAGGER. Above that is the word BROADSWORD
        in slightly larger print. Continuing up comes WARHAMMER, BATTLEAXE,
        ENVOY and finally LEADER at the top. Each word slightly larger then the
        previous. Vines, flowers, raindrops, and creatures are all designed in
        and around the words, a masterpiece of a tattoo. A daggers handle and
        hilt is seen right above the top word and the blade pierces down through
        the rest as if it joins all the words together in a ranking system. The
        tattoo looks to have taken hours to craft and has not seemed to fade
        even as the creature grew older. The rest of his fur looks to be black
        but is beginning to gray from aging.
      </p>
      <Exits>
        <Link to="/valhalla/keep/chamber-of-decisions">
          The Chamber of Decisions
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Skean;
