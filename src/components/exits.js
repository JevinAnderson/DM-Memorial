import React from "react";
import PropTypes from "prop-types";

import styles from "./exits.module.css";

const Exits = ({ children }) => (
  <p className={styles.exits}>[Exits: {children}]</p>
);

Exits.propTypes = {
  children: PropTypes.node
};

export default Exits;
