import React from "react";
import { Link } from "gatsby";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import Characters from "../../../components/characters";

const NorthEastTower = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Northeast Tower</h1>
      <p>
        A howling whistle of wind and the draft of cool air welcomes you as you
        enter the northeast tower of the castle. Strong granite stones masoned
        with exceptional skill form the cone that makes up the tower. Tall
        stairs lead upwards, each step just below an average human's knee spiral
        to the top, where a bit of extra stone exists which must be stepped over
        to fully enter the top tower room. Along the circular tower wall murder
        holes give a field of observation to that side of the castle, but
        unfortunately, not downward at the country- side below. There seem to be
        some small markings on the wall hidden among the various scratches and
        chips in the stone. Green moss grows between the grooves of the fine
        stone. A damp, cool breeze blows through this part of the tower. Along
        the base of the northern wall is a marble pipe leading toward the west,
        and rising upward and then through a marble box-shaped structure
        standing upon a tripod of marble legs. The top of the marble box is an
        iron grate, and smoke rises from it. The marble pipe exits out the other
        side and rises up the northern wall until it disappears through the
        ceiling. Another pipe runs across the ceiling and down the northern wall
        until it finds one of the murder holes, at which point it turns outward
        and stops. Water drips from its open end to the ground below.
      </p>
      <Exits>
        <Link to="/valhalla/keep/east-side">west</Link>
        <Link to="/valhalla/keep/northeast-tower-top">up</Link>
      </Exits>
      <Characters>
        <Link to="/characters/yamakaze">
          Yamakaze Tymoran, guardian of the Shrine to Joja, sits in quiet
          meditation.
        </Link>
        <Link to="/characters/rakzar">Rakzar is here.</Link>
        <Link to="/characters/sengeril">Sengeril is here.</Link>
      </Characters>
    </Room>
  </Layout>
);

export default NorthEastTower;
