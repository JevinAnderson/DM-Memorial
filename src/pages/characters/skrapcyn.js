import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Skrapcyn = () => (
  <Layout>
    <SEO title="Skrapcyn" />
    <Room>
      <h1>Skrapcyn Recil</h1>
      <p>
        A large, muscular ant-folk is before you. He stands just over six feet
        tall and seems to be a dark shade of maroon. He carries a number of
        weapons and armaments about his body, which seems to be covered in some
        drab, soiled travelling cloak.
        <br />
        As you peer closer, you notice what appears to be a number of etched
        markings across some of his exposed exoskeleton. Several tattoos are
        etched a bit thicker and more prominently than the rest:
        <br />
        A very wide DAGGER that is shaped like a shield.
        <br />
        A long BROADSWORD with a small-scale shield guarding the hilt.
        <br />A WARHAMMER can be seen here. Its head is intricately fashioned
        from four individual shields.
      </p>
      <Exits>
        <Link to="/valhalla/keep/altar-to-nature">Altar to Nature</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Skrapcyn;
