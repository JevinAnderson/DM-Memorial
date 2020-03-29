import React from "react";
import PropTypes from "prop-types";

import { Blue, BlueGreen, Glowing, Green, Humming, Sticky } from "./auras";

export function Equipment({ children, name }) {
  return (
    <>
      {name && <>{name} is using:</>}
      <table>
        <tbody>{children}</tbody>
      </table>
    </>
  );
}

Equipment.propTypes = {
  children: PropTypes.node
};

export const Item = ({ children, slot, ...rest }) => (
  <tr {...rest}>
    <td>
      {"<"}
      {slot}
      {">"}
    </td>
    <td>{children}</td>
  </tr>
);

Item.propTypes = {
  children: PropTypes.node,
  slot: PropTypes.string
};

export const Ring = ({ children }) => (
  <Item slot="worn on finger">{children}</Item>
);

export const Neck = ({ children }) => (
  <Item slot="worn around neck">{children}</Item>
);

export const Torso = ({ children }) => (
  <Item slot="worn on torso">{children}</Item>
);

export const Ear = ({ children }) => (
  <Item slot="worn on ear">{children}</Item>
);

export const Head = ({ children }) => (
  <Item slot="worn on head">{children}</Item>
);

export const Legs = ({ children }) => (
  <Item slot="worn on legs">{children}</Item>
);

export const Feet = ({ children }) => (
  <Item slot="worn on feet">{children}</Item>
);

export const Arms = ({ children }) => (
  <Item slot="worn on arms">{children}</Item>
);

export const Shield = ({ children }) => (
  <Item slot="worn as shield">{children}</Item>
);

export const Wrist = ({ children }) => (
  <Item slot="worn around wrist">{children}</Item>
);

export const Wielded = ({ children }) => <Item slot="wielded">{children}</Item>;

export const DualWielded = ({ children }) => (
  <Item slot="dual wielded">{children}</Item>
);

export const Brand = ({ children, god = "" }) => {
  switch (god.toLowerCase()) {
    case "xyza":
      return (
        <Brand>
          <BlueGreen /> a Lemniscate
        </Brand>
      );
    case "darkwood":
      return (
        <Brand>
          <Humming /> <Sticky /> <Green /> The Living Battleaxe
        </Brand>
      );
    case "joja":
      return (
        <Brand>
          <Glowing /> <Blue /> a deep blue rose whose green thorny stem ends in
          a quill tip
        </Brand>
      );
    default:
      return <Item slot="branded">{children}</Item>;
  }
};
