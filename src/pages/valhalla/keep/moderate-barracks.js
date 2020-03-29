import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import Spaces from "../../../components/spaces";
import { Link } from "gatsby";
import Characters from '../../../components/characters'

const ModerateBarracks = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>A moderate Crusader barracks</h1>
      <p>
        You enter a barracks built for the medium and smaller races in the
        Crusader ranks. Comfortable cots and bunks with heavy cotton blankets
        line the walls. Several nests made of straw and twigs line the northern
        part of the walls for the draconian race to sleep in. A fireplace to the
        east burns various pine woods, warming the room and carrying the fresh
        scent of pine in the air.
      </p>
      <Exits>
        <Link to="/valhalla/keep/further-2">west</Link>
      </Exits>
      <Spaces />
      You see a row of large redwood bedframes.
      <Characters>
        <Link to="/characters/bleyard">Bleyard is here.</Link>
      </Characters>
    </Room>
  </Layout>
);

export default ModerateBarracks;
