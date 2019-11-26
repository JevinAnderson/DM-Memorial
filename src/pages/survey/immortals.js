import React from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

import styles from "./index.module.css";
import SurveyLayout from "../../components/survey-layout";
import SEO from "../../components/seo";
import Container from "../../components/container";
import HRBorder from "../../components/hr-border";

const SURVEY_DATA = [
  { name: "Aityhrein", value: 2, color: "#00BF6F" },
  { name: "Ceran", value: 1, color: "#507cb6" },
  { name: "Darkwood", value: 1, color: "#f9be00" },
  { name: "Drinlinda", value: 1, color: "#6bc8cd" },
  { name: "Fastolph", value: 1, color: "#ff8b4f" },
  { name: "Fizzfaldt", value: 4, color: "#7d5e90" },
  { name: "Joja", value: 5, color: "#d25f90" },
  { name: "Kontina", value: 1, color: "#c7b879" },
  { name: "Nimnryth", value: 1, color: "#db4d5c" },
  { name: "Nyrisia", value: 3, color: "#507cb6" },
  { name: "Riallus", value: 1, color: "#f9be00" },
  { name: "Rungekutta", value: 1, color: "#6bc8cd" },
  { name: "Sagan", value: 1, color: "#ff8b4f" },
  { name: "Xeonauz", value: 1, color: "#7d5e90" },
  { name: "Xurinos", value: 2, color: "#d25f90" },
  { name: "Xyza", value: 3, color: "#c7b879" }
];

const DIMENSION = 300;
const HALF_DIMENSION = DIMENSION / 2;
const OUTER_RADIUS = HALF_DIMENSION - 2;
const INNER_RADIUS = OUTER_RADIUS - 35;

const Immortals = () => (
  <SurveyLayout>
    <SEO title="Immortals" />
    <Container>
      <HRBorder />
      <div className={styles.content}>
        <h1>Who was your favorite immortal?</h1>
        <div className={styles.pieChart}>
          <PieChart width={DIMENSION} height={DIMENSION}>
            <Pie
              data={SURVEY_DATA}
              dataKey="value"
              cx={HALF_DIMENSION - 5}
              cy={HALF_DIMENSION - 5}
              outerRadius={OUTER_RADIUS}
              innerRadius={INNER_RADIUS}
              paddingAngle={10}
            >
              {SURVEY_DATA.map(data => (
                <Cell key={data.name} stroke="transparent" fill={data.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <HRBorder />
      </div>
    </Container>
  </SurveyLayout>
);

export default Immortals;
