import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Nessa = () => (
  <Layout>
    <SEO title="Nessa" />
    <Room>
      <h1>Nessa</h1>
      <p>
        Her most striking feature is her thick, wavy red gold hair that reached
        down to her knees. Its unusual color and length accentuates her beauty,
        making her unique among elves. The tresses looks shiny and healthy and
        always worn half-braided to keep the curls off from her serene face. Her
        eyes are the color of emerald, stunning, with tiny gold flecks. Her
        features are as well chiselled as any average elf with straight nose and
        a smiling mouth. Her lips are soft, the color of pink rose petals. Her
        chin is small and firm that speaks determination and hints at
        stubbornness. Her skin is the color of alabaster, perfect and flawless
        with no blemishes. She's thin and slender, looking fragile and
        vulnerable but her light weight contributes to her agility. Her long and
        slim fingers give an indication that she's adept in wielding weapons
        gracefully. However, it's free of callus and appears soft to touch.
      </p>
      <Exits>
        <Link to="/valhalla/banquet">The Banquet Hall</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Nessa;
