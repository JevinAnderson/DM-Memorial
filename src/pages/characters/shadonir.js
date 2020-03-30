import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Shadonir = () => (
  <Layout>
    <SEO title="Shadonir" />
    <Room>
      <h1>Shadonir Redwood</h1>
      <p>
        A creature unknown to you standing approximately six feet in stature
        clad in what seems to be crafted armors. They are dark, muddy, and
        crudely built but at the same time seem flexible and usable. The armor
        is light on this creature as it is encased in a hard exoskeleton. The
        surface of this hero is brick red, thick, and adorned with sharp hairs.
        It wears the bulk of armaments around its torso. A heavy mithril clad
        vest lays over it's abdomen, with two holes for arms that protrude. It
        wields a frightening staff in its forehand as well as a well sharpened
        dagger that seems well polished in its offhand. A elegantly drawn tattoo
        of a dagger goes up the left side of his neck. On the right side is an
        elegantly drawn ancient broadsword tattoo.
      </p>
      <Exits>
        <Link to="/valhalla/keep/northwest-tower">The Northwest Tower</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Shadonir;
