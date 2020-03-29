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
  Hands,
  Body
} from "../../components/equipment";

const Fastolph = () => (
  <Layout>
    <SEO title="Fastolph" />
    <Room>
      <h1>Lord Fastolph Boffin</h1>
      <p>
        You cast your gaze upon an elder halfling, with skin that appears
        weathered with time and age. His appearance seems come across that of a
        layman, simple in form and fashion. He chooses not to wear a a garment
        to cover an odd looking scar upon his chest near the heart - a wound
        that looks as if it, too, had ascended to immortality with Fastolph. His
        eyes are filled with wonder, like that of a little boy caught up in the
        mysterious nature of Thera. The tufts of hair that peek out of the
        bandana upon his head show a touch of silver as if his body forgot that
        it no longer required to age. The expression on his face occasionally
        changes to a smile, as if he is attempting to find joy in his
        environment. The arms of his body are riddled with scars of his past
        triumphs and failures, yet he chooses not to hide them whatsoever. You
        notice that his hands, though aged in appearance, are steady and move
        about in a highly precise manner. As you look over him, you notice a
        strange locket dangling from his neck of which he kisses from time to
        time in solitude, but without mortification.
      </p>
      <p>
        <Equipment name="Fastolph">
          <Ring>A circlet of fine silk in the shape of a black hand</Ring>
          <Ring>The Boffin family signet ring</Ring>
          <Neck>a makeshift guard's badge</Neck>
          <Neck>A semi-translucent necklace</Neck>
          <Torso>a leather backpack</Torso>
          <Ear>(Glowing) a feathered earring</Ear>

          <Legs>A fine pair of black silk trousers</Legs>
          <Feet>Tufts of orange-gray hair</Feet>
          <Hands>A pair of black stitched gloves covered in charcoal</Hands>
          <Arms>A black tatoo of a Stradi viol</Arms>
          <Body>
            A gleaming white cloak with a black hand imprinted upon it
          </Body>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/casino">The Casino</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Fastolph;
