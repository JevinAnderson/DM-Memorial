import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Spaces from "../../../components/spaces";

const Library = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>Library of the Crusades</h1>
      <p>
        Rows and rows of heavy oak book shelves line this warm room. Books of
        almost every size, color, age, and topic considered important to a
        Crusader fill the shelves. Numerous scrolls are plastered to the walls,
        lay sprawled out on tables, or sticking out of cubby holes. A warm glow
        emanates from the large brick fireplace at the north end of the library.
        Large picture blocks with the alphabet on them lay in many boxes to aid
        the needs of the many Crusaders who are "challenged". You notice a
        librarian working diligently to keep this place in order.
      </p>
      <Exits>
        <Link to="/valhalla/keep/chamber-of-decisions">east</Link>
      </Exits>
      <Spaces />A small but official looking book is here.
      <br />
      <Spaces />
      You see a finely carved but very sturdy redwood bookshelf holding many
      fine books.
      <br />
      <Spaces />A book bound in green-tinted leather and embossed with a picture
      of a 'living battleaxe' lies here.
      <br />
      <Spaces />A heavy iron bound book of Ancient Warfare sits here ready to be
      studied.
      <br />
      <Spaces />A grey leather-bound book with clean vellum pages rests upon the
      ground.
      <br />
      Amarie, the Librarian, keeps a close eye on the collection of books.
    </Room>
  </Layout>
);

export default Library;
