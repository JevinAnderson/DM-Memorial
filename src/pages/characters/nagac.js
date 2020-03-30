import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Nagac = () => (
  <Layout>
    <SEO title="Nagac" />
    <Room>
      <h1>Nagac Sirise</h1>
      <p>
        Before you is a very large looking ant. It is hard to tell if this
        creature before you is a male or female, but by the looks of the
        clothing and scars over this creatures body, this one is definitely
        male. It has the lower segment on the ground with four legs supporting
        its massive frame. Standing upright are the other two segments of his
        body and standing that way, it appears to be almost 5 feet tall. The
        upper arms are strong and thick and appear to be used to being used to
        carry things. His whole body has a liquid grace to it when he moves. His
        eyes are a dark brown in color that almost match the color of his whole
        body. He wears clothing like others but he wears them with distain. He
        is baggy looking in those clothes.. Upon his upper breast plate, there
        is a marking that is visable through the clothing he wears. This marking
        is that of an Ant standing over a pile of something.. It worn over the
        years, but it appears this large Ant is protecting the pile.
        <br />
        Upon the right side of his head, there is a black and gold looking
        DAGGER that appears to be stuck into his head, blade first. Upon the
        left side of his head, there is a grey and red colored BROADSWORD that
        appears to be sticking out of the side of his head! Upon the upper part
        of his torso, there is a deep purple and red WARHAMMER with its head
        appearing to be stuck through his carpace!!! Upon the Center part of his
        chest, there is a bright red **ENVOY** tattooed there that is outlined
        in yellow!
      </p>
      <Exits>
        <Link to="/valhalla/keep/intersection">An intersection</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Nagac;
