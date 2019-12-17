import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const WarAgreement = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>War Agreement</h1>
      <p>To: Crusader and Conclave:</p>
      <p>
        The below outlines the agreement between Crusader and Conclave as it
        pertains to raids and the war period between the two great Houses:
      </p>
      <p>
        There shall be no raids unless a mortal defender capable of fighting is
        within the realms. This defender needs not be at the Guardian, merely in
        the lands. In respect to conclave apprentices - it is their duty to
        expect such a raid when a crusader is present. The Crusader may notify
        the apprentice, but is not required to do so.
      </p>
      <p>
        Exception to above - it is permissible to raid without mortal defender
        to balance the power advantage. To win by Absence is not an honorable or
        acceptable war strategy.
      </p>
      <p>
        Duels can be offered and should be offered. If they are refused then
        either side may regain their respective artifact by attack and raid.
      </p>
      <p>
        if a raid is started while a mortal defender is in the lands and said
        defender departs the raid is to be completed and the item of power may
        be taken.
      </p>
      <p>
        During the war period only to ensure these terms are being met when
        there is a raid a scroll is to be sent to EACH house stating who
        attacked and who was in the realms to defend.
      </p>
      <p>
        The above is the official agreement as prepared by Wojciecha of House
        Crusader and Quenton of House Conclave.
      </p>
      <p>
        Sealed: <br />
        Wojciecha, Leader of the Neverending Crusader
        <br />
        Quenton, Master of the Tower
      </p>
      <p>1st the Month of the Winter Wolf, Year 215</p>
      <p>Amendment</p>
      <p>To: Crusader and Conclave</p>
      <p>
        The treaty is once again back in place between our houses. There are
        amendments to adress and so we do so now. There will be NO defenderless
        raids on the houses. This will make the battles in the weeks between the
        times of combat worth gaining. Gain the advantage during the week could
        decide the result of the entire war.{" "}
      </p>
      <p>
        To revisit the subject, there is no longer the possibility regaining
        advantage by raiding without a defender in place.
      </p>
      <p>
        Signed:
        <br />
        Segovax Raw, Leader of the Crusades
        <br />
        Quenton Beck, Master of the Tower
      </p>
      <p>5th the Month of the Battle, Year 223</p>
      <Exits>
        <Link to="/valhalla/keep/further">The Keep</Link>
      </Exits>
    </Room>
  </Layout>
);

export default WarAgreement;
