import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import Spaces from "../../../components/spaces";
import { Link } from "gatsby";
import Characters from "../../../components/characters";

const Decisions = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Chamber of Decisions</h1>
      <p>
        A huge mass of red oak forms a circle table that takes up half of the
        room. Oversized solid oak chairs with tall backs line the edge of the
        giant table. One chair dwarfs the rest, its size large enough for a
        titan to sit in. Battle maps and charts are pinned to various points of
        the walls. This seems to be the room where many of the important
        decisions take place. Near one of the many maps on the wall is a framed
        leather scroll. Below it is a second framed leather scroll, this one
        sealed with green and adorned with a green ribbon. In one corner is a
        rock bearing the likenesses of a centaur, a dwarf, and a canine which
        strongly resembles a wolf. There are small words chiseled in the bottom
        corner of the rock.
      </p>
      <Exits>
        <Link to="/valhalla/keep/hall-of-history">north</Link>
        <Link to="/valhalla/keep/library">west</Link>
      </Exits>
      <Spaces />A carving of a giant warrior and a large red dragon doing battle
      is set into the wall, serving as a fountain.
      <Characters>
        <Link to="/characters/shokaitjisu">Shokaitjisu is here.</Link>
        <Link to="/characters/rasrin">Rasrin Ta'dawen is here.</Link>
        <Link to="/characters/vledimire">Vledimire is here.</Link>
        <Link to="/characters/danduran">Danduran is here.</Link>
        <Link to="/characters/dohgin">Dohgin is here.</Link>
        <Link to="/characters/jhelt">Jhelt is here.</Link>
        <Link to="/characters/korrick">Korrick the Twinkle-Tail is here.</Link>
        <Link to="/characters/rigahi">Rigahi is here.</Link>
        <Link to="/characters/segovax">Segovax is here.</Link>
        <Link to="/characters/skean">Skean is here.</Link>
        <Link to="/characters/slate">Slate is here.</Link>
        <Link to="/characters/thrakyr">Thrakyr is here.</Link>

      </Characters>
    </Room>
  </Layout>
);

export default Decisions;
