import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import Characters from "../../components/characters";
import { Dark, Sticky } from "../../components/auras";
import { Link } from "gatsby";

const Tower = () => (
  <Layout>
    <SEO title="The Tower" />
    <Room>
      <h1>The Tower</h1>
      <p>
        You enter the base of a massive tower. Your mind clears and focuses.
        This place seems to encourage clear though. Arcane symbols decorate the
        walls glowing with energy. Bookshelves line the walls everywhere. Mages
        converse with each other on the esoteric, understanding in death the
        mysteries of the world that alluded them in life. Familiars follow the
        magi everywhere. Whereas in life, they were shaped by the power of
        Arcana and the Conclave, in death they form at their masters whims. They
        come in all shapes and sizes. They assist with their masters research
        and tasks. Lord Riallus and Lord Palmis circulate amongst them, answer
        questions, and share the wisdom of the divine.{" "}
        <Link to="/characters/quenton">Lord Quenton</Link> smiles as he speaks
        with his old friend Shtarla. Occasionally he glances at a{" "}
        <Link to="/items/candy-land">magical picture</Link> hung on the wall
        near him.
      </p>
      <Exits>
        <Link to="/valhalla/hall-4">east</Link>
      </Exits>
      <Characters>
        <Link to="/characters/quenton">
          <Sticky /> A gooey sticky candy dragon is here.
        </Link>
        <Link to="/characters/xeophar">
          <Dark /> A half rotted illithid is here.
        </Link>
      </Characters>
      Shtarla Juno, Head Recruiter of Guild of Alchemical Research is here.
    </Room>
  </Layout>
);

export default Tower;
