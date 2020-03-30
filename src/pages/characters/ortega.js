import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Ortega = () => (
  <Layout>
    <SEO title="Ortega" />
    <Room>
      <h1>Ortega</h1>
      <p>
        Before you is a handsome young man. His hair is a dark black like that
        of a ravens feathers. He slicks his hair back to his skull to prevent
        interference of his vision. Looking into his brown eyes you see a
        burning intellect hidden deep within. His skin a pale white and is free
        of scars or blemishes. His mouth closed in to a neutral expression. His
        nostrils slightly flare savoring the air. His neck is covered by the
        collar of his torso wear. A black garment covers his chest that buttons
        along his left side. This black long sleeved covering does much to
        conceal the tone of his body. His hands can be clearly seen against the
        blackness of his top. His fingers are long and swift. The ends of those
        fingers are well kept nails. They have been trimmed short and cleaned
        vigorously. Covering his legs are trousers of the same material as his
        top. The leggings as well as the top have been well maintained. You can
        see no stains nor lint on either garment. Again the angles of material
        are angular hiding any tone of his legs. His feet are covered in dark
        shoes. Despite they travel on the ground no dirt can be seen on either
        shoe. Upon his left arm he bares a tattoo of a DAGGER. Under the Dagger,
        a large BROADSWORD stretches down his forearm. Upon the blade is the
        word 'Harmony'. On his right arm you see a beautiful WARHAMMER. The
        shaft is made of gold so pure it is is white in color. Upon the head of
        the hammer is the word 'Purity'. A long wooden handle stretches up his
        forearm. The wood leads to a wicked BATTLEAXE. Written above the head of
        the axe is, 'ROSIE'.
      </p>
      <Exits>
        <Link to="/valhalla/keep/armory">The Armory</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Ortega;
