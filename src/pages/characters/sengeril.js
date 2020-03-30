import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Sengeril = () => (
  <Layout>
    <SEO title="Sengeril" />
    <Room>
      <h1>Sengeril Stregheria</h1>
      <p>
        A large warrior dressed in beautifully detailed armor stands before you.
        Sengeril appears to be of trollish descent at first glance. His skin is
        a flawless ebony-green. His pointed ears and narrow bone structure in
        his face gives him a very Elvin look. Unlike most trolls who are
        incredibly large built masses of meat and muscle. Sengeril's muscle is
        incredibly lean. His muscle and sinew look almost unnatural, as if
        sculpted from solid rock. Long snow white hair flows down onto his
        shoulders with the exceptions of a small red line. A dull glow radiatese
        from his puiless blood red eyees. making it impossible to ascertain
        where they focus. His armour is crafted of fine mithril embroidered with
        many symbols of the royal family Dhaes Drae Aesilon. A blood red cape of
        a fine silk like material hangs down from his neck, moving in the wind.
        Sengeril's movements are as fluid as his cape upon the wind. A large
        sword is strapped over his shoulder that is covered in a thin layer of
        Blood. Upon the blade is carved the letters spelling "ELF SLAYER"
        <br />
        On his Left arm you see a red tattoo of a dagger that stands out
        brightly against his Green-Ebony skin.
        <br />
        On his right arm you see a tattoo of a BROADSWORD thats stands out
        brightly against his Green-Eboney skin.
        <br />
        On his inner left forearm you see a tattoo of a Warhammer that stands
        out brightly against his Green-Ebony skin.
      </p>
      <Exits>
        <Link to="/valhalla/keep/northeast-tower">The Northeast Tower</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Sengeril;
