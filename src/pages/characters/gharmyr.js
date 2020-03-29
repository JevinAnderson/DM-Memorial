import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Gharmyr = () => (
  <Layout>
    <SEO title="Gharmyr" />
    <Room>
      <h1>Gharmyr Willow-Wing</h1>
      <p>
        Rugged and rough, tattered and tough, a tan and sleeveless cloak drapes
        down about two human heights from an obelisk of a troll. His hair is
        frizzy, but braided tightly into dreadlocks. Set in his massive, thick
        skull are his brown eyes affixed forward. Hanging at the bottom of an
        oblong shaped head is a black goatee connected to a mustache sprouting
        from underneath a large nose with flared nostrils. A scar upon the bulky
        right forearm along the vein symbolizes the purity coursing throughout
        his veins. Distinguishingly enough, this troll's cheeks are of a deep
        blue aura. Another scar down his left forearm symbolizes a second and
        more official oath. A dagger is warpainted on the right forearm. Overtop
        of the scar upon the left forearm, burnt flesh resembles an angry mob
        with arms raised. It glows a pale yellow light and hums with chants of
        defiance. Above the warpainted dagger upon the right bicep is a larger
        and more intimidating warpainted broadsword. Across the length of his
        shoulder with the point directed towards his neck is a freshly
        warpainted warhammer that stands out from the other drawings.
      </p>
      <Exits>
        <Link to="/valhalla/keep/inner-keep">The Inner Keep</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Gharmyr;
