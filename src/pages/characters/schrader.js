import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Schrader = () => (
  <Layout>
    <SEO title="Schrader" />
    <Room>
      <h1>Schrader</h1>
      <p>
        Before you is a handsome creature that appears be both man and beast.
        His long white hair, though tied back with a leather strap, drapes like
        a curtain across his back. The pure white color of his hair could only
        have come from long hours within the sun leaching out all other color.
        His dark face is cracked and withered from time spent in the elements.
        Cold blue eyes chill you as they pierce even the thickest of foliage.
        His nose is bent right hard were it has been broken and poorly set. His
        lips may appear damp, perhaps from a recent drink, but they cracked and
        split in may places. His rather impressive torso is covered only in what
        little armor he has scavenged thus far. Wickedly strong arms move with a
        grace that suggest this beast knows how to swift. Below his torso begins
        the body of a horse. A fine black stallion by the looks of things. His
        ebony fur is silky and soft to the touch. A fine glow comes of from the
        sheen of the fur. This suggest he is from good breeding. Just a hint of
        slight sway in his spine, but this magnificent animal is thoroughbred.
        Surprisingly white and very clean hooves keep this creature firmly
        attached to the ground. Above them powerfully quick legs makes it so
        this beast could dance around any in his way. On his left arm is the
        fine art work of Kug. On his left bicep is a well crafted dagger with
        its blade extending down toward his elbow. Kug's hand has rendered a
        beautiful Broadsword. The hilt begins on his left forearm. The finely
        crafted blade extends down his arm ending at a point on his left palm.
        Whats this? A cute little kitten, with a fierce snarl, two-hand wielding
        a massive Warhammer has been etched upon his right bicep. On his inner
        right forearm you see a bunch of beautiful butterflies covered in
        glitter and pixie dust. In the meadow giving chase to these fiendish
        beasts is a giant wearing a red cape wielding a massive BATTLEAXE. In a
        fervor of a zealot the giant shouts "Me Smush Da Magic!"
      </p>
      <Exits>
        <Link to="/valhalla/keep/large-barracks">
          A large Crusader Barracks
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Schrader;
