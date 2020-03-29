import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import {
  Equipment,
  Ring,
  Neck,
  Torso,
  Ear,
  Legs,
  Feet,
  Arms,
  Wrist,
  Wielded,
  Brand
} from "../../components/equipment";

const Joja = () => (
  <Layout>
    <SEO title="Joja" />
    <Room>
      <h1>Lady Joja Lechium</h1>
      <p>
        An aura of power emanates from this elvish lady. Deep blue, it surrounds
        her to about a quarter inch from her being. Eyes of intense green with
        tiny blue-grey flecks look at you from an angelic, sun-bronzed face
        framed by red-streaked, dark brown hair. An inch below her right eye is
        a small scar in the shape of a battleaxe. Upon her arms are pictures. On
        one arm is a comet above an intricate battleaxe whose handle is wrapped
        by leafy vines. On the other arm, a silvery dagger, a silvery broadsword
        next to it, both blades pointed upward. A warhammer whose handle
        resembles the battleaxe's is superimposed over the two blades. Above the
        three weapons is a quill pen with a war gauntlet at the tip, as though
        the pen were drawing it. Above that is a war gauntlet crossed by a
        feathery quill pen crossed by a battleaxe with a vine of green leaves
        swirling about the handle, crossed by a staff which vaguely resembles a
        sceptre. Behind her, huge feathery wings are partly extended, as though
        folding them behind her is uncomfortable. Regally she stands, tall and
        slim with soft curves held by form-fitting green oak leaves and a pair
        of leggings of soft green leather held by the brown leather straps of
        her sandals.
      </p>
      <p>
        <Equipment name="Samurai">
          <Ring>
            (Sticky) a golden wedding band engraved with the name 'Krazar'
          </Ring>
          <Ring>
            (Sticky) encircling bands of gold, mithril and platinum named
            "Love's Eternity"
          </Ring>
          <Neck>(L) a bloodstone pendant necklace from Tymoran</Neck>
          <Neck>(Glowing) (Humming) a salt shaker tied on a small chain</Neck>
          <Torso>
            a long tunic that seems to be fashioned from springtime oak leaves
          </Torso>
          <Ear>
            (Deep Blue Aura) A beautiful earring glowing with the purity of
            Joja's soul
          </Ear>
          <Ear>
            (Deep Blue Aura) A beautiful lavender feathered earring glowing with
            the purity of Joja's soul and Ronith's essence
          </Ear>
          <Legs>
            a pair of soft leather leggings tinted the color of spring leaves
          </Legs>
          <Feet>
            a pair of leather sandals whose straps wrap around her calves and
            shins
          </Feet>
          <Arms>
            a pair of long flared sleeves fashioned from springtime oak leaves
          </Arms>
          <Wrist>a small string of Istrovir's broken teeth</Wrist>
          <Wrist>(L) (Glowing) a vine bracelet</Wrist>
          <Wielded>
            (L) (Sticky) a long staff carved from lignum vitae called Living
            Purity
          </Wielded>
          <Brand god="Joja" />
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/keep/northeast-tower">The Northeast Tower</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Joja;
