import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";

const TwinklingDeath = () => (
  <Layout>
    <SEO title="Twinkling Death" />
    <Room>
      <h2>
        A large, sharp iron sword twinkling with rainbow colors lies here.
      </h2>
      <p>
        The sword is a long and very sharp blade with an easy grip handle
        wrapped with fine leather. The leather has been treated with a sticky
        substance so that it does not easily fall from the grip of its wielder.
        The blade itself is of iron, and it shines so brightly that it refracts
        the light, sending twinkles of rainbow colors into the eyes of all who
        look upon it.
        <br />
        <br />
        Engraved along the flat edge are the words, 'TWINKLING DEATH'. Those
        words are enough to incite fear into the hearts of any who should come
        close enough to it to read the words, except for Korrick the
        Twinkle-Tail, owner of the sword and Leader of the Neverending Crusades.
      </p>
      <Exits>
        <Link to="/characters/korrick">Korrick the Twinkle-Tail</Link>
      </Exits>
    </Room>
  </Layout>
);

export default TwinklingDeath;
