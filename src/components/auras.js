/* eslint react-hooks/exhaustive-deps: 0 */

import React, { useState, useEffect } from "react";
import styles from "./auras.module.css";

export const Golden = () => (
  <span style={{ color: "gold" }}>(Golden Aura)</span>
);
export const Blue = () => <span style={{ color: "cyan" }}>(Blue Aura)</span>;
export const DeepBlue = () => (
  <span style={{ color: "blue" }}>(Deep Blue Aura)</span>
);
export const BlueGreen = () => (
  <span style={{ color: "#0d98ba" }}>(Blue-Green Aura)</span>
);
export const Dark = () => <span style={{ color: "#4A235A" }}>(Dark Aura)</span>;
export const Glowing = () => <span style={{ color: "white" }}>(Glowing)</span>;
export const Green = () => <span style={{ color: "lime" }}>(Green Aura)</span>;
export const Humming = () => <span>(Humming)</span>;
export const Sticky = () => <span>(Sticky)</span>;
export const Fiery = () => (
  <span style={{ color: "#E25822" }}>(Fiery Aura)</span>
);

const COLORS = [
  "white",
  "yellow",
  "red",
  "cyan",
  "lime",
  "pink",
  "orange",
  "magenta"
];

const randomColor = (colors = COLORS) =>
  colors[Math.floor(Math.random() * colors.length)];

export const Chromatic = () => {
  const [color, setColor] = useState(randomColor);
  useEffect(() => {
    let nextColor = color;
    const interval = setInterval(() => {
      nextColor = randomColor(COLORS.filter(x => x !== nextColor));
      setColor(nextColor);
    }, 1050);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <span className={styles.chromatic} style={{ color }}>
      (Chromatic Aura)
    </span>
  );
};
