import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import Characters from "../../components/characters";

const Castle = () => (
  <Layout>
    <SEO title="The Castle" />
    <Room>
      <h1>The Castle</h1>
      <p>
        You stand in the banquet hall of a beautiful white marble castle.
        Banners extolling knightly virtues are hung about the castle walls.
        Looking out a window, you can see a vast field with the souls of noble
        steeds running freely. In the hall an enormous round table seats the
        valiant knights of Valor. People often change seats to speak with old
        friends or to meet knights in the afterlife, whom they had never known
        as mortals. There is no importance placed in the arrangement. All are
        equal here. Lord Cirdan emanates a sense of peace as praises his knights
        mortal deeds. Lord Shamutanti and Lord Cedric mingle among the crowd and
        listen fondly to the heroic tales of their knights.
      </p>
      <Exits>
        <Link to="/valhalla/hall-2">east</Link>
      </Exits>
      <Characters>
        <Link to="/characters/fastolph">
          (Translucent) An elder hobbit, clutching a butter knife, is here.
        </Link>
      </Characters>
    </Room>
  </Layout>
);

export default Castle;
