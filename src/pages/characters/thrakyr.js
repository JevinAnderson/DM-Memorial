import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import { Equipment, Wielded, Brand } from "../../components/equipment";

const Thrakyr = () => (
  <Layout>
    <SEO title="Thrakyr" />
    <Room>
      <h1>Thrakyr</h1>
      <p style={{ textAlign: "justify" }}>
        When standing erect, the tips of Thrakyr's horns reach nine feet in
        height. The points of each horn are separated by a span of almost two
        feet as they jut widely apart from each side of his skull. His skull has
        the form of a massive Bull, yet from within this beasts head, keen
        intelligence gleams within his coal black eyes. A large ring pierces the
        septum of his nose and dangles above a mouthful of sharpened teeth.
        <br />
        <br />
        Thrakyr's head lies upon a massive torso. His shoulders spread nearly
        twice the width of his horns and support massive arms. The arms have the
        size of a minor tree trunk, and wield the two deadly swords Thrakyr is
        almost never without. From below his waste, two enormous legs support
        this bull man, and move with an unnatural grace for a creature so large.
        His legs end with horseshoed hooves that clop and clatter with each step
        he takes.
        <br />
        <br />
        An elaborately ornate dagger has been tattooed upon Thrakyr's right
        forearm. Upon his left forearm a long broadsword has been tattooed in
        the same style. Overlaying the broadsword, a warhammer has been
        constructed. The hammer adds to the tattoo of the broadsword, but leaves
        evidence of its original design. On either side of the hammers maul the
        image of an axe blade has been tattooed. The work has made the warhammer
        into a battleaxe.
        <br />
        <br />
        Though it is very rare, Thrakyr is occasionally seen without armor
        covering his body. On the occasions where Thrakyr's back is bare one can
        see a large tattoo depicting his rank as Warlord within the Steel Clan.
        This tattoo depicts three distinct scenarios. In one scene, an Antfolk
        clothed in the trappings of a thief is bent over a desk examining
        various parchments scattered upon the surface of the desk. In another
        scene, a large giant stands with his arms clasped behind his bask
        listening patiently to a group of youngsters as he stares longingly at a
        dress shop down the street. In the final scene, Thrakyr is depicted
        holding a large banner in both hands while leading a charge of the men
        and women of the Steel Clan into battle.
        <br />
        <br />
        Upon Thrakyr's chest, Thrakyr is depicted somberly receiving a lit torch
        being passed to him from a large hill giant. The giants pale skin and
        topknot mark him as Sir Woldrun, former leader of the Neverending
        Crusades, and mentor to Thrakyr. Thrakyr's face is ashen as he accepts
        the torch symbolizing his leadership of the Steel Clan, and the
        departure of a dear friend.
      </p>
      <p>
        <Equipment>
          <Wielded>
            <Link to="/items/weapons/diplomatic-impunity">
              a long, serrated blade cut from diamond named 'Diplomatic
              Impunity'
            </Link>
          </Wielded>
          <Brand god="joja" />
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/keep/chamber-of-decisions">
          The Chamber of Decisions
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Thrakyr;
