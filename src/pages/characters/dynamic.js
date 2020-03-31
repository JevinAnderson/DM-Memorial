import React from "react";
import { Router, Redirect } from "@reach/router";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { lookupCharacter } from "../../utilities/characters";

const DynamicCharacter = props => {
  const { id } = props;

  const character = lookupCharacter(id);
  if (!character) {
    return <Redirect to="/404" />;
  }

  const { name, description, location, exit } = character;

  return (
    <Layout>
      <SEO title={name} />
      <Room>
        <h1>{name}</h1>
        <pre>{description}</pre>
        <Exits>
          <Link to={location}>{exit}</Link>
        </Exits>
      </Room>
    </Layout>
  );
};

const BluePrint = () => (
  <Router basepath="/characters/dynamic">
    <DynamicCharacter path="/:id"></DynamicCharacter>
  </Router>
);

export default BluePrint;
