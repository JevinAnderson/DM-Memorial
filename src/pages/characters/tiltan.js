import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import { Equipment, Ring } from "../../components/equipment";

const Tiltan = () => (
  <Layout>
    <SEO title="Tiltan" />
    <Room>
      <h1>Lord Tiltan</h1>
      <p>
        Here is a fifteen foot tall black & brown furred centaur. The brown skin
        of his oval shaped face matches well with his thick black hair. His hair
        is shorn close to his scalp allowing his headwear to fit better. His
        bushy black eyebrows almost cover his brown eyes and travel
        uninterrupted from one side to the other. A large circular golden nose
        ring pierces his right nostril. A long, well-oiled perfumed and curly
        beard totally covers his mouth and cascades down his chest. Armor covers
        most of his barrel-shaped body, but you can see large well-trained
        muscles bulging out from underneath. A well-proportioned black haired
        horse body holds this fierce looking centaur. His forelegs are planted
        well under the shoulders and the legs hang straight. The hind legs are
        planted close together with the points of the hocks pointed inward. His
        thighs come well down to the hocks. His feet are round and open with
        wide hoof heads. It seems like he is wearing four white socks on his
        thick black legs. You get the distinct smell of oil, herbs, and cooked
        meats as you approach him. Various weapons are strapped all over his
        body. At his left hip is a flask of pure beaten white mithril. A brushed
        and oiled black tail falls can be found on his posterior. Cutting a
        swath down the left side of his body, through the beard, down the neck,
        over his left deltoid, and ending at his left chest is a dark red wound
        that almost seems fresh. The wound oozes a black tarry oil similar to
        the stench left by Rantialen, the Eternal Black.
      </p>
      <p>
        <Equipment name="Tiltan">
          <Ring>
            (L) (Glowing) (Humming) a hollowed out acorn, glowing with divine
            power
          </Ring>
          <Ring>(L) (Glowing) (Humming) a ring of twisted vines</Ring>
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/banquet">The Banquet Hall</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Tiltan;
