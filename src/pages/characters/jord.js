import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Jord = () => (
  <Layout>
    <SEO title="Jord" />
    <Room>
      <h1>Lord Jord</h1>
      <p>
        Standing before you is a giant of massive proportions. He is almost
        completely covered in dark red blood, and everytime he moves, he leaves
        a trail of blood in his wake. He is the most hideous giant you have ever
        seen, and it doesn't help that he wears armor that looks to be from
        pieces of all sorts of animals and mankind. He wields darkness itself
        massed into a form of what looks to be a large staff. His skin and hair
        are stained red from the blood that had a chance to dry. His shield
        seems to have moving images on it, and the details that are shown are
        too horrible to describe. A medallion hangs around his neck, charred and
        mangled, but if you look carefully, you can see the gold hue that it has
        retained from its previous form.
      </p>
      <Exits>
        <Link to="/valhalla/keep/library">Library of the Crusades</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Jord;
