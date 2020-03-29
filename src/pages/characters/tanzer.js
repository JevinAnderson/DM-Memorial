import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Tanzer = () => (
  <Layout>
    <SEO title="Tanzer" />
    <Room>
      <h1>Tanzer</h1>
      <p>
        Beautiful blonde locks drape about the face of this human, peering
        through the hair that falls about his face, you cannot pry away from the
        gaze of his piercing ice blue eyes. He is not extraordinarily large,
        however his entire body is well defined and fine-tune from years of
        dedication to his training. You can only describe the movement of his
        arms as swift and deadly, true in the style of the Tiger. A droplet of
        sweat is apparent on his forehead, he has obviously just stepped away
        from his dojo to meet with you. Like all other monks, Tanzer shares the
        common goal of maintaining the perfect balance between both the physical
        and mental attributes of the body and soul. He keeps his spirit strong.
        Branded into his forearm is the dagger of the Steel.
      </p>
      <Exits>
        <Link to="/valhalla/keep/further">Further in the Keep</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Tanzer;
