import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Vledimire = () => (
  <Layout>
    <SEO title="Vledimire" />
    <Room>
      <h1>Vledimire, Spirit Knight of the Steel Clan</h1>
      <p>
        A ghost you see before you, ethereal in form, and yet not without some
        color. Judging from his well polished elysium armoring, he is a Knightly
        fashion. Most of his body is covered in a some kind of armoring so his
        physical stature is not visible. A helmet covers his head hiding
        everything but illuminating red eyes, that can be seen from with two eye
        slits. A broad pair of brass colored wings extend from the Knight's back
        draping toward the ground. Wielded in one hand is a longsword with an
        eerie glow. A rather large shield is held in the other hand, blocking
        the entire view of the left side of the Knight. A tightly strung grey
        silken sash is wrapped around the waist and connected to the leather
        belt that holds the lower part of his armor together. Upon the sash
        words art written that spell "Envoy". Even further investigation will
        show, a small brass tail that seems to be behind the Knight. His feet
        are adorned in some rather thick boots of some kind, but sharp claws
        seem to be protruding the front portion of the boots. Strapped to the
        back and waist side of the Knight are a multitude of different types of
        weapons. Some glowing with the same eerie hum as the longsword and
        others looking rather dull grey compared to those that do glow. Upon the
        chest plate of this knight, an insignia of some kind can be seen. It is
        a very Large Warhammer. Upon the shoulder guards of the knight there is
        a symbol of a Dagger. The large shield is adorned with a symbol as well,
        that of a huge Broadsword. Hanging from his neck on a sturdy golden
        chain is a pendant bearing the symbol of a Living Battleaxe. A sturdy
        silver chain around his neck bears a pendant which hangs just below the
        Living Battleaxe pendant, this one bearing the symbol of a deep blue
        rose whose green thorny stem ends in a quill tip.{" "}
      </p>
      <Exits>
        <Link to="/valhalla/keep/chamber-of-decisions">
          The Chamber of Decisions
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Vledimire;
