import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Yamakaze = () => (
  <Layout>
    <SEO title="Yamakaze" />
    <Room>
      <h1>Yamakaze Tymoran</h1>
      <p>
        Long dark locks cover the small, pale, pointy eared head of the fellow
        before you. Small tufts of fur spring out from the tips of his ears and
        the edges of his cheeks, and combined with the thick dark eyebrows give
        him an almost animal quality to his appearance. His almond shaped eyes
        are blue of color and slightly tilted, his nose is small and delicate as
        is his mouth. Stubble lines his chin and upper lip, giving him a 5
        o'clock shadow. He is fairly thin and wiry, though the look of his
        clothes tend to suggest he leads a rough and tumble life. A single edged
        silver dagger, handle bound in cord, is tattooed down his right
        shoulder. Upon his left shoulder a brilliant red bladed broadsword runs
        down to his elbow, the handle covered in grey eelskin wrapped with black
        cloth in triangular patterns. At the nape of his neck is another tattoo,
        a pair of warhammers crossed forming an x at his neck, one hammer a deep
        ebony color, the other gleaming ivory.
      </p>
      <Exits>
        <Link to="/valhalla/keep/northeast-tower">The Northeast Tower</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Yamakaze;
