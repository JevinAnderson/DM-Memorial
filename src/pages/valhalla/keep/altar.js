import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Spaces from "../../../components/spaces";

const Altar = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Altar of The Never Ending Crusades</h1>
      <p>
        You stand in the most sacred room in Castle Balkra. High above polished
        granite walls is a nice vaulted ceiling, a dome covered with a mosaic of
        brilliant colors depicting the life of the First Crusader, a dwarf who
        gave his life and soul to be housed in the Gauntlet. The walls
        themselves are so shiny they appear to glow with a luminescence that
        seems almost alive. Inscribed on the north and south walls are different
        parts of page sixteen of the Crusader Book of the Code. Covering much of
        the wall behind the altar is a huge painting depicting a nature scene.
        The altar itself is fashioned as a pristine block of granite sitting
        upon a base of marble, with circular stairs leading up to it. Inside the
        altar lies the War Gauntlet which is guarded day and night by the Wise
        One. It is rumored that to touch the Gauntlet of War with an impure
        warrior's soul is to incur the wrath of the gods of war. The floor is
        also of marble, and it is very clean despite the fact that many booted
        feet that have trodden upon mud and dirt must enter here at one time or
        another.
      </p>
      <Exits>
        <Link to="/valhalla/keep/foyer">west</Link>
      </Exits>
      <Spaces />
      An altar stands here, constructed of granite.
      <br />A stone statue of a wise warrior stands by the altar.
    </Room>
  </Layout>
);

export default Altar;
