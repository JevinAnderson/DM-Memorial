/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import "./layout.css";
import styles from "./layout.module.css";
import Navigation from "./navigation";

const Layout = ({ children, navigation }) => (
  <>
    <Header />
    <div>
      {navigation ? (
        navigation
      ) : (
        <Navigation
          links={[
            {
              href: "/",
              text: "Home"
            },
            {
              href: "/survey/",
              text: "Survey Results"
            }
          ]}
        />
      )}
      <main>{children}</main>
      <footer className={styles.footer}>
        Darkmists Copyright ©1996 - {new Date().getFullYear()} |
        www.darkmists.org
        <br />© Jevin Anderson 2019 - {new Date().getFullYear()}
      </footer>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.node
};

export default Layout;
