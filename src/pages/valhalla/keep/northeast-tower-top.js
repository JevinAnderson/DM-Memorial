import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Characters from "../../../components/characters";
import { DeepBlue } from "../../../components/auras";

const NorthEastTowerTop = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Top of the Northeast Tower</h1>
      <p>
        Two arcing stone walls, one to the north, one to the south, rise up, and
        to the east are four, large, polished, marble pillars coming up from the
        ground outside the Keep, all the way to the top of the Tower. The
        western wall is filled with a large, beautiful blue curtain of sturdy
        make. The curtain is bound by large, polished brass rings allowing it to
        be closed or opened at will. A huge, glass roof covers the top of the
        Tower. This beautiful roof is held on metal hinges on both sides
        allowing the roof to be retracted open or closed at will. The glass is
        perfectly transparent allowing sunlight or moonlight to find the bottom
        of the floor with ease. Completely encircling the perimeter of the tower
        floor is a layer of stone, seemingly a second layer to what was once the
        first (wall) layer, and high enough to require that you step over and
        onto the tower room floor. That floor is covered with moist soil, thick
        in mulch, mixed with decaying leaves, through which many plants have
        sprouted. The trees which grow here are twisted and bent. Parts of them
        look dead, but new growth has sprouted, and the leaves are a healthy
        green. Some of the shrubs have also taken a beating, it appears, but
        they, too, have new greenery to show for their fight against the
        elements. Near the twisted trees, in the center of the soil-filled
        floor, off to the side of the worn path, is a construction known as a
        dakota hole. At the base of the northern wall and the secondary inner
        wall, a marble pipe emerges upward, and warm water trickles out and
        soaks the ever moist, mulchy soil. The northern wall appears is perfect
        shape, even polished of any dirt or blemishes. On the right side of the
        northern wall there is a remaining tree leaning heavily against the top
        of the wall, its purchase on the shallow floor iffy. The southern wall
        has small ivy vines holding grip to the small grooves in the wall, their
        tiny green leaves seeking sunlight. A small grouping of pink roses
        appears to have taken root near one of the green shrubs. Near another
        green shrub a small grouping of yellow tulips grows. A small white lily
        grows near the base of one of the smaller trees. A huge grouping of
        bright orange and yellow flowers grows in the eastern section among a
        few small green shrubs. A small sprig of purple violets grows outside an
        overturned box and between two green shrubs. tower.
      </p>
      <Exits>
        <Link to="/valhalla/keep/northeast-tower">down</Link>
      </Exits>
      <Characters>
        <Link to="/characters/joja">
          (OUTLAW) <DeepBlue /> A tall, slim, fair elven lady with enormous
          wings of fluffy white feathers is here.
        </Link>
        <Link to="/characters/krazar">
          A Massive Titan, Surrounded by a Dark Aura
        </Link>
      </Characters>
    </Room>
  </Layout>
);

export default NorthEastTowerTop;
