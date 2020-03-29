import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Hibernai = () => (
  <Layout>
    <SEO title="Hibernai" />
    <Room>
      <h1>Hibernai Valkari, the guildmaster</h1>
      <p>
        A black robe, form fitting surrounds this monk's body. It doesn't flow,
        but is form fitting, showing his defined muscular figure. His hair is
        braided and flows freely, the beads at the end brush against each other.
        The belt of his guild adorns his waist and the family insignia, a large
        green rain drop, is embroidered onto the back of his black robe. A green
        tattoo runs down his tan face from the top of his forehead, down through
        his left eye, stopping at the middle of chin. On the right side of his
        neck, you see a small dagger engraved, and glowing the same dark green
        as the tattoo on his face. Surround- ing this dagger, is a broadsword of
        great size, which signifies his rank in the eternal crusades. His hands
        are tightly weaved with the strength of Nature, vines and leaves wrapped
        so closely that they become one with his fists, strengthening his blows.
        Dominating the back of his neck, the mark of Lord Darkwood, the living
        battleaxe, glows brightly.
      </p>
      <Exits>
        <Link to="/valhalla/keep/battle-room">The Banquet Hall</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Hibernai;
