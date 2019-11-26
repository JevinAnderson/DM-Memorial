import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Navigation from "./navigation";

const SurveyLayout = ({ children }) => (
  <Layout
    navigation={
      <Navigation
        links={[
          {
            href: "/",
            text: "Home"
          },
          {
            href: "/survey/",
            text: "Ending"
          },
          {
            href: "/survey/immortals",
            text: "Immortals"
          },
          {
            href: "/survey/roleplay",
            text: "Roleplay"
          },
          {
            href: "/survey/character",
            text: "Character"
          },
        ]}
      />
    }
  >
    {children}
  </Layout>
);

SurveyLayout.propTypes = {
  children: PropTypes.node.isRequired
};

SurveyLayout.defaultProps = {};

export default SurveyLayout;
