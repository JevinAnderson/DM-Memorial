import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Slate = () => (
  <Layout>
    <SEO title="Slate" />
    <Room>
      <h1>Slate Maguire</h1>
      <p>
        Standing before you is a mean looking Dwarf with flame red hair, and a
        long robust beard of the same flame red color. His hair is worn in a
        thick topknot at the top of his head, and is bound by a thin cord of
        worked gold twined with copper and silver. His visage is sour and very
        gruff in appearance. He speaks with a very deep baritone voice with a
        thick Thorbardin accent. His massive chest is cored with dense muscle,
        as is his bulging arms.
        <br />
        His deeply weathered face is marred by a wicked scare that runs from his
        jawbone to his brow on the right side of his face. His right eye is
        completely destroyed and is white with a thick unseeing cataract that
        leaves him blind out of that eye.
        <br />
        * Upon his left cheek is a small tattoo of a small DAGGER, it is
        shrouded deep red flames.*
        <br />
        *** Upon his right forearm is a tattoo of a long gleaming BROADSWORD!***
        <br />
        ******** Upon his right arm is a tattoo of a huge WARHAMMER shrouded in
        crackling lightning ***********
        <br />
        *************** Upon his forehead is a small tattoo of a BATTLEAXE!!!!
        ********************
        <br />
        ^^^^^^^^^^^^^Upon his left cheek is a small tattoo that says "WARLORD!!"
        ^^^^^^^^^^^^^^^^^^
        <br />
        --------------------((((Upon his chest is a large tattoo that says
        "LEADER"))))-----------------------------
        <br />
        ()()()()()()()()()()()()( Upon his back is a broad tattoo that says
        BLOODKNIGHTS ()()()()()()()()()()()()()()
        <br />
        --- Sitting in one corner or the other of his mouth is the butt of a fat
        CIGAR! ---
      </p>
      <Exits>
        <Link to="/valhalla/keep/chamber-of-decisions">
          The Chamber of Decisions
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Slate;
