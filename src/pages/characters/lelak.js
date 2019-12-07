import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import {Blue, Glowing} from '../../components/auras'
import { Link } from "gatsby";

const Lelak = () => (
  <Layout>
    <SEO title="Lelak" />
    <Room>
      <h1>Lelak the Avatar of Loyalty</h1>
      <p>
        Lelak stands approximately five and a half feet in height. While not
        physically imposing, it does have the appearance of grace and agility.
        It sports reddish brown hair and a beard. Its eyes are of two colors.
        His right eye is a very strong grey while his left eye is a sharp green.
        His teeth are a bright white and are healthy. He wears and assortment of
        armaments and weapons that he has collected throughout his journeys.
      </p>
      <p>
        {"<branded>"} <Glowing /> <Blue /> a deep blue rose whose green thorny
        stem ends in a quill tip
      </p>
      <Exits>
        <Link to="/valhalla/dome">The Dome</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Lelak;
