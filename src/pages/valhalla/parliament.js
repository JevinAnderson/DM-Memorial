import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import Characters from "../../components/characters";

const Parliament = () => (
  <Layout>
    <SEO title="Parliament" />
    <Room>
      <h1>Parliament</h1>
      <p>
        Members of Enforcer and Justicar gather together in an expansive
        Parliament. They commend each other on their noble work, and bask in the
        quiet order they had sought to create in their mortal lives. Lord
        Wervdon commends his officers for protecting the innocent and helpless
        every chance he gets. Lord Kaleb can be overheard occasionally arguing
        with Xathen. In one exchange he can be heard to say, "Look, I told you,
        you don't need the sentient sword here alright. The laws enforce
        themselves in this place." He looks on in exasperation as Xathen
        replies, "I just feel more comfortable with it ok. It's mine!". At which
        point the sword chimes in with, "I thirst for blood master!" He throws
        up his hands in defeat, "I KNOW, I've heard it before alright! You say
        that, like, a lot!"
      </p>
      <Exits>
        <Link to="/valhalla/hall">west</Link>
      </Exits>
      <Characters>
        <Link to="/characters/kaleb">Lord Kaleb is here.</Link>
      </Characters>
    </Room>
  </Layout>
);

export default Parliament;
