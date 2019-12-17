import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import Characters from "../../../components/characters";
import { Link } from "gatsby";

const HallOfMemory = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Halls of Memory</h1>
      <p>
        You stand in a grand open space just inside the keep of the castle. The
        ceiling arches overhead, forming a large dome of stone which travels a
        long ways into the Keep. The walls and the floors are cut from the
        finest grade of stone. The placement of each stone is with near
        perfection, impressing anyone with the knowledge of architecture.
        Numerous pictures of famed battles entirely cover the walls and
        ceilings, and famous Crusader legends adorn the hall in the form of
        lifelike marble statues. The glory of the past thrives with life as one
        walks the halls of memories.
      </p>
      <Exits>
        <Link to="/valhalla/keep/hall-of-memory-2">east</Link>
        <Link to="/valhalla/keep/">west</Link>
      </Exits>
      <Characters>
        <Link to="/items/keep-statues/rengar">
          A marble statue of Rengar is here.
        </Link>
        <Link to="/items/keep-statues/haastus">
          A marble statue of Haastus is here.
        </Link>
        <Link to="/items/keep-statues/racquel">
          A marble statue of Racquel is here.
        </Link>
        <Link to="/items/keep-statues/galad">
          A marble statue of Galad is here.
        </Link>
        A marble statue of Meldrad is here.
        <br />
        A marble statue of Xaithius is here.
        <br />
        A marble statue of Kalibrak is here.
        <br />
        A marble statue of Storlian and Xailyth is here.
        <br />
        A marble statue of Moloch is here.
        <br />
        A marble statue of Bradwarden is here.
        <br />
        A crystal statue of Berniko is here.
        <br />
        A marble statue of Jedke is here.
        <br />
        A marble statue of Onemas is here.
        <br />
        A marble statue of Tokei is here.
        <br />
        A marble statue of Vledimire is here.
        <br />
        A marble statue of Rasrin is here.
        <br />
        A marble statue of Debashe is here.
        <br />
      </Characters>
    </Room>
  </Layout>
);

export default HallOfMemory;
