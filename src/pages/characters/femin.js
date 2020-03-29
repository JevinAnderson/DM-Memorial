import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const BluePrint = () => (
  <Layout>
    <SEO title="BluePrint" />
    <Room>
      <h1>Femin Underfoot</h1>
      <p>
        Before you is a little, scrawny halfling. His flesh seems to wrap his
        bones. His hair is a thin brown, and is very dirty. His eyelids are thin
        and his sad looking eyes bulge from his skull. They shimmer a forest
        green, which have a shine to them from tears which are always there. His
        age-lined face is dirty and crusty from dried tears. His teeth are
        rotten and black, and he is missing several of them. He has one huge,
        jagged tooth behind his upper lip. His arms are pale, skinny, and
        smooth, wielding barely any strength. On his hands, he wears tight
        gloves, made of the skin of a gnome. The shirt he wears is torn and
        tattered. Many colored patches are sewn into it to hold it together. His
        pants are the same way. Worn on his feet are watertight bags, with a bit
        of sponge on the bottom. On his head, he wears an ornate pirate hat, a
        picture of a skull and crossbones on it. On his right shoulder rests his
        piratey parrot, Chuck, whose colours look very weird, almost a grayish
        mixed with green. A small cut in his left cheek, still remotely open,
        drips a reddish green. He carries a sack, on which he has a words
        stitched onto it that read: 'He has bricks in his sack, which he slings
        o'er his back.' As for his back, you see through the tatters of his
        shirt that his back was used as a canvas for a tattoo artist, perhaps
        more than one, for the styles of the various elements are different. You
        see what appears to be a sailboat with many sails, and at the top of the
        mast, a blue pirate's hat. Superimposed over the sail- boat is a huge
        dagger. Across that huge dagger is a broadsword, and crossing the
        broadsword is a warhammer.
      </p>
      <Exits>
        <Link to="/valhalla/keep/bar">The Crusader Bar</Link>
      </Exits>
    </Room>
  </Layout>
);

export default BluePrint;
