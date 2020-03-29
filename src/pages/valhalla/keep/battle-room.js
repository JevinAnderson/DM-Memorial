import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Characters from "../../../components/characters";

const BattleRoom = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Battle Room</h1>
      <p>
        This is what is known as the battle room. A rack filled with wooden
        practice weapons greets you as you enter. A circular open pit forms a
        battle arena in which the monk and gladiator instruct from. Stains of
        sweat and dried blood lay scattered about the pit and the heavy scent of
        salt hang in the air. Battle charts and graphs of weak points of
        different races line the walls. Dummies, many which seem beaten to a
        pulp, already lie scattered about. This seems to be the perfect place
        for a warrior to build and tone the skills of combat.
      </p>
      <Exits>
        <Link to="/valhalla/keep/intersection">south</Link>
        <Link to="/valhalla/keep/forge">west</Link>
      </Exits>
      <Link to="/characters/oslog">
        Oslog stands grinning for another round of combat.
      </Link>
      <br />
      <Link to="/characters/liming">
        Liming stands ready to instruct those willing to learn the ways of
        discipline.
      </Link>
      <Characters>
        <Link to="/characters/hibernai">
          A powerfully built, muscular man is here to help with your training.
        </Link>
      </Characters>
    </Room>
  </Layout>
);

export default BattleRoom;
