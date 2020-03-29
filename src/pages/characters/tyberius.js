import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Tyberius = () => (
  <Layout>
    <SEO title="Tyberius" />
    <Room>
      <h1>Tyberius</h1>
      <p>
        Before you stands a human man, his lean form mostly concealed within the
        long, shadowy cloak he wears about his shoulders. The cloak itself is
        very dark blue, nearly black in color, like a midnight sky, and has a
        slightly velvety quality to it. On either side of the simple clasp a
        deep-blue rose is embroidered, bright and distinct in contrast to the
        darkness of the cloak. The roses' stems, complete with thorns, are
        stitched in vibrant green, each sharpening at the end to the point of a
        quill.
        <br />
        Tyberius carries himself with an air of confidence, his every move
        betraying the dangerous grace of a practiced warrior, like a big
        predatory cat. His short-cropped hair is thick and dark, as is the rough
        stubble of a few days growth that frames his almost-handsome face.
        Appearing to be in his early middle-years, an expression of wary
        vigilance is etched in his features. However, his near-black eyes speak
        of years that his face does not, causing you to reconsider your estimate
        of his age. His gaze is sharp, smoldering with intensity as he keeps
        careful watch on his surroundings.
        <br />
        The skin of his face and neck appears smooth and youthful, and is marked
        with a number of tattoos. Upon his cheekbone, just under his left eye,
        is a blood-red teardrop, frozen forever in its joyless path. Directly
        next to it is a small, black dagger with a long, triangular blade. Two
        more tattoos can be seen, one on either side of his neck. On the right
        side, a heavy-bladed broadsword is etched into his flesh, while a
        massive warhammer marks the left side. Between them, just below his
        Adam's apple, is an intricate tattoo of a rapier crossing a war
        gauntlet.
      </p>
      <Exits>
        <Link to="/valhalla/keep/hall-of-history">The Hall of History</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Tyberius;
