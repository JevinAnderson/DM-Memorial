import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Segovax = () => (
  <Layout>
    <SEO title="Segovax" />
    <Room>
      <h1>Segovax Raw</h1>
      <p>
        Here be a creature from the deep desert. He is of a race of fabled
        hunters and warriors known only as the Antfolk to the other sentient
        races of Thera. This being is apparently male and is rather hostile
        appearing. His carapace is dull red and seems to be strong armor indeed.
        He bares strange painted runes on his carapace and his limbs. His head
        is painted white with the same organic paints. He has large wicked
        curved and sharp mandibles that slowly click and quiver as he struggles
        with with the humanoid language of other Therans. His mandibles exude a
        strange ichor that can only be poison.
        <br />
        He has four small round eyes that are bisected and compound and miss
        nothing. His head slowly rotates from side to side in attempt to watch
        his surroundings. There appears to be crusted sections of disease on his
        carapace, as there are entire sections of his carapace that have been
        weakened with disease. This disease has spread over his upper torso and
        head leaving him disfigured and maimed. In the center of his head is a
        symbol burned into the carapace, it is a giant letter "L".
        <br />
        **Upon the back of his carapace is a tattoo of a long thin DAGGER
        piercing an Anvil**
        <br />
        ***Upon the left side of his carapace is a tattoo of a gleaming
        BROADSWORD***
        <br />
        ****Upon his torso there is a tattoo of a large shining WARHAMMER****
        <br />
        *****Upon his abdomen is a tattoo that reads, WARLORD*****
        <br />
        ******Upon his head there is a tattoo that reads, LEADER!!!!******
        <br />
        --------Upon his face he wears a long red leather veil to cover his
        face---------
        <br />
      </p>
      <Exits>
        <Link to="/valhalla/keep/chamber-of-decisions">
          The Chamber of Decisions
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Segovax;
