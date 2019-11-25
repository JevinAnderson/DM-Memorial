import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import styles from "./navigation.module.css";

const Navigation = ({ links }) => (
  <div className={styles.navigationContainer}>
    <table className={styles.navigationTable}>
      <tbody>
        <tr>
          {links.map(link => (
            <td key={link.href}>
              <Link to={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.text}
                </a>
              </Link>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string
    })
  )
};

Navigation.defaultProps = {};

export default Navigation;
