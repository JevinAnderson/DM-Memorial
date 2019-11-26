import React from "react";
import PropTypes from "prop-types";

import styles from "./room.module.css";

const Room = ({ children }) => <div className={styles.room}>{children}</div>;

Room.propTypes = {
  children: PropTypes.node
};

Room.defaultProps = {};

export default Room;
