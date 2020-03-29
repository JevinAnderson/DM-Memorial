import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Darkwood = () => (
  <Layout>
    <SEO title="Darkwood" />
    <Room>
      <h1>Lord Darkwood</h1>
      <p>
        A titan of a cloud giant towers over you, his enormous bulk seems to
        make you shrink before him. This giant's skin seems to be made of copper
        or bronze, and looks to be tough as a solid mass of stone. A strong gust
        of wind blows foilage up from him,sending bits of it swirlling around
        him like a mini cyclone. Large blood vessels buldge from his massive
        body, the power to move mountains lie in his arms. Your attention is
        then drawn to his right forearm, where a colorful tattoo beckons further
        inspection. A life size picture of a stunningly beautiful grey-elf woman
        graces his flesh. Scars from many battles fought against the evil magics
        of mortal hands line his body. As you scan upwards, peering far up this
        warrior's frame you stare in shock at the horrible sight. A frightening
        piece of iron is forged into a iron mask that hides most of a shredded
        face that once brought smiles. Piercing green eyes peer out behind the
        metal. They seem to stare within your soul, their dazzling green color
        seem to bring a sense of wild fury yet tranquility. Darkwood takes on
        the command of the Crusades, leading a group of honorbound warriors to
        vanquish all mortal magics from the lands of Thera. He searches the
        realm for those great enough to serve his cause. Those that display
        honor and true courage in battle will fight along with him until the
        end.
      </p>
      <Exits>
        <Link to="/valhalla/keep/green-room">The Green Room</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Darkwood;
