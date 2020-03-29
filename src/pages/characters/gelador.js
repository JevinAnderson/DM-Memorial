import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Gelador = () => (
  <Layout>
    <SEO title="Gelador" />
    <Room>
      <h1>Gelador Stonefist</h1>
      <p>
        Before you stands a huge Giant male. He is roughly 14 feet in height and
        his weight cannot be judged. His thick body is tight with bulging
        muscle. His arms, chest and legs ripple with the product of years of
        hard work. His face is long and tired looking. His face adorns a long
        jagged scar that goes from his left eyebrow across his nose and down
        into is long, brown beard. His eyes a deep bark coloured brown that
        match his beard and hair almost perfectly. His hair is long, shoulder
        length and like his beard it is a brown, however significantly lighter,
        perhaps lightened some from many hours in the hot Theran suns. His left
        forearm adorns a very long, and distinct tattoo of a two crossed battle
        staffs with the inscription "Purification Through Blood." Upon his left
        is a deep brand of of the Living Battleaxe that appears to emit a slight
        green aura. Below his right elbow, is a very distinct mark of a small
        dagger. Upon his left arm is another visible tattoo, this one is of a
        large broadsword. Across his massive chest is another dark tattoo, this
        of a massive warhammer with the inscription of "Purity and Honor"
        underneath. Across his massive back is another large tattoo of a shaded
        battleaxe entangled in thorny vines. Upon the blade of the axe are the
        words "Death before Dishonor"
      </p>
      <Exits>
        <Link to="/valhalla/keep/foyer">Foyer to the Altar Room</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Gelador;
