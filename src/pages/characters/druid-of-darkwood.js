import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import { Brand, Equipment } from "../../components/equipment";

const DruidOfDarkwood = () => (
  <Layout>
    <SEO title="Druid of Darkwood" />
    <Room>
      <h1>The Druid of Darkwood</h1>
      <p>
        The strange giant is covered in a green robe glittered with runes of
        nature. He says little and seems to observe all around him. The tall
        giant's large feet are sandaled and seem even large for a giant's. A
        strange green aura glows around his body, especially his hands.
      </p>
      <p>
        <Equipment name="Druid of Darkwood">
          <Brand god="Darkwood" />
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/keep/altar-to-nature">Altar to Nature</Link>
      </Exits>
    </Room>
  </Layout>
);

export default DruidOfDarkwood;
