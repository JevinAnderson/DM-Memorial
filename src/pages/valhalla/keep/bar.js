import React from "react";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Room from "../../../components/room";
import Exits from "../../../components/exits";
import { Link } from "gatsby";
import Characters from "../../../components/characters";
import Crusaders from "../../../utilities/characters/crusader-characters";

const Bar = () => (
  <Layout>
    <SEO title="The Keep" />
    <Room>
      <h1>The Crusader Bar</h1>
      <p>
        You enter a cavern with stacks of beer barrels. On the western side a
        few large racks hold many bottles of wine in them. A large wooden
        counter serves as a bar with many sturdy stools surrounding it. A large
        minotaur with a patch over one eye grunts as he fills orders. A large
        knife board rests on the southern wall for throwing practice and
        entertainment. Many more barrels line the exit to the east.
      </p>
      <Exits>
        <Link to="/valhalla/keep/armory">north</Link>
        <Link to="/valhalla/keep/canteen">east</Link>
      </Exits>
      <Characters>
        <Link to="/characters/kug">
          Kug stands behind the bar serving drinks.
        </Link>
        <Link to="/characters/gryleth">
          An ancient, shortlegged, and obviously grumpy dwarf patiently
          observing his surroundings
        </Link>
        <Link to="/characters/femin">
          A scrawny pirate with a parrot on his right shoulder sits at the
          counter, drinking heavily and obviously quite drunk.
        </Link>
        {Object.keys(Crusaders).map(key => (
          <Link key={key} to={`/characters/dynamic/${key}`}>
            {Crusaders[key].name} is here.
          </Link>
        ))}
      </Characters>
    </Room>
  </Layout>
);

export default Bar;
