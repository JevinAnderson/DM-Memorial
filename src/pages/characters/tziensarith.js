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
  Body,
  Waist,
  Wielded,
  DualWielded
} from "../../components/equipment";

const Tziensarith = () => (
  <Layout>
    <SEO title="Tziensarith" />
    <Room>
      <h1>Lord Tziensarith</h1>
      <p>
        A desiccated form of a draconian rises up here. More corpse then then
        living tissue, blue scales cover putrid bone where skin still remains.
        Hallow eye sockets burn with a black eldritch fire which undulates as if
        alive. Twisted horns jut skyward and have turned a yellowish brown color
        suggestive of long dead bone, they seem a fitting crown to the head of
        this thing. The chest and abdomen reveal a single long scar, in the
        shape of a Y which appears to be stitched up. The skin ripples
        chaotically and from stitching holes an occasional maggot can be seen
        wriggling free and dropping to ground. Ribs are exposed in areas, and
        the skin looks ancient and as dead and cold as the grave wince this
        thing has come. The arms and legs seem oddly shaped, almost to thin and
        skeletal to be of any use. In fact, the entire creature seems a walking
        skeletal creature. on the left forearm are a series of dark runes that
        also glow with a deep eldritch fire, a cold fire that seems to suck the
        very heat from the room.
      </p>
      <p>
        <Equipment name="Tziensarith">
          <Ring>
            (Glowing) (Humming) (Pulsing) a ring engraved with infernal runes,
            'Discord'
          </Ring>
          <Ring>
            (Glowing) (Humming) (Pulsing) a ring infused with innocence lost
          </Ring>
          <Neck>(Glowing) (Humming) (Pulsing) The Amulet of Hope Lost</Neck>
          <Body>(Glowing) (Humming) (Dark Essence) The Aura of Terror</Body>
          <Waist>
            (Glowing) (Humming) (Pulsing) a bloody bag of skin, the pouch of
            souls
          </Waist>
          <Wielded>(Humming) (Pulsing) (Dark Aura) The Tooth of Souls</Wielded>
          <DualWielded>
            (Glowing) (Humming) (Pulsing) (Infernal Aura) The Scourge 'Eternal
            Suffering'
          </DualWielded>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/banquet">The Banquet Hall</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Tziensarith;
