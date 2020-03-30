import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Jhelt = () => (
  <Layout>
    <SEO title="Jhelt" />
    <Room>
      <h1>Jhelt</h1>
      <p>
        A thick shelled ant with a light, and a swords stands tall. Much of the
        body has been cut by weapons, and battered by weather and war. The face
        is serious with a sense of pride and content. Large eyes black in color
        and pinchers with green fangs Six legs furry and dark red in color A
        very thick carapace makes the back bulge enhancing the armor. The arms
        and legs are covered in well designed drawings. There is a dagger, small
        in size and jagged. It is of a gray shade with blue hues along it. The
        handle is of cherry wood stain and maple. Then a broadsword, large and
        mighty, it is double edged with a single spike separating the two
        blades. A letter X is carved into the handle. A Warhammer, The front
        edge is strong metal, with a jagged point at the top. The point starts a
        circle that wraps around the entire hammer. Inside the circle is dark
        green colors that enhance blood stains on the hammer. The battleaxe, it
        looks to gleam off the skin reflecting its sharp, the handle very thick
        redwood with crocodile color. Two large curved blades that look like
        butterfly wings. There is a tree stump covered in blood and a helmet,
        there are vines wrapped around it all with a tall shadow looking over
        this place. A small butterfly yellow in shade is tattooed on his back,
        it is being stabbed by a small silver dagger, and the end of the dagger
        is made of a brown colored cross.
      </p>
      <Exits>
        <Link to="/valhalla/keep/chamber-of-decisions">
          The Chamber of Decisions
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Jhelt;
