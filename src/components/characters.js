import React from "react";
import PropTypes from "prop-types";

import styles from "./characters.module.css";

const Characters = ({ children }) => (
  <div className={styles.characters}>{children}</div>
);

Characters.propTypes = {
  children: PropTypes.node
};

export default Characters;
