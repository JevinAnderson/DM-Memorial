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
          }
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
