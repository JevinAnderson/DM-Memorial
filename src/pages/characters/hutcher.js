import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Hutcher = () => (
  <Layout>
    <SEO title="Hutcher" />
    <Room>
      <h1>Hutcher Scar</h1>
      <p>
        Hutcher stands approximately 6 feet in height and weighs about 185
        pounds. Immediately you can see that age has taken a toll on this man.
        His once blonde hair has turned white with time. His cold blue eyes
        still have that sharp, keen look to them, but they are covered with
        eyelids that sag and droop and fall beneath a forehead permanently
        creased. Hutcher's once pointed nose has been smashed and flattened from
        continual battles over the years. His face, while always his namesake,
        has gained a few more scars since his induction in the clan. His oldest
        scars remain. A scar in the center of his hairline is an inch in length
        and runs halfway into his hair, and halfway onto his forehead. This scar
        is only noticeable when his hair is at its shortest. On the lower left
        portion of his lip is a second scar smaller in size. In addition to
        these scars, many newer marks adorn his face. A scar on his right cheek
        for instance, indicates a time when a dagger was thrust through his
        cheek and some poorly improvised stitching was used to close the wound.
        A strong punch to his mouth put his own teeth through his lip and
        created a scar that runs from his right nostril to the left side of his
        lip. These are but a few of the noticeable scars you see when looking at
        this man. When Hutcher's right forearm is visible, you notice the tattoo
        of a dagger. This tattoo, obviously his oldest, has lost ink and faded
        over the years. Upon his left forearm is a nasty scar that has been
        noticeably worked into the tattoo of a broadsword. While such work may
        once have been commendable, time has accentuated this makeshift job
        showing it for what it was, an obvious improvisation. On the bicep of
        his right arm is another nasty scar, it has been worked into a warhammer
        by Kug's able hands. Upon his right wrist is an elaborately designed
        Battleaxe tattoo which covers a mark that may have once been a burn.
        When uncovered, his chest reveals the mural tattooed upon it. This mural
        depicts an elaborate battle between the Conclave of Wizardry and the
        Steel Clan. Charging gloriously into the assault is the Leader of the
        Steel Clan in full battle armor. He hefts a spear aimed at the Conclave
        Leader's head. Flanking him on his right and left sides are Warlords of
        the Steel Clan. They engage the Archwizards of the Conclave with sword
        and axe. Behind these three lie a trail of fallen magi. Then, off to the
        side, you see a man hunched uncomfortably over a desk. This man sits
        with a pained expression as he fills out scrolls and listens to the
        young man beside him say, "Can I be in the Steel Clan?" An arrow points
        to this pitiful figure with the words, "I'm that guy," etched beside it.
        This tattoo illustrates Hutcher's current rank as Envoy of the Crusades.
      </p>
      <Exits>
        <Link to="/valhalla/keep/altar">
          The Altar of The Never Ending Crusades
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Hutcher;
