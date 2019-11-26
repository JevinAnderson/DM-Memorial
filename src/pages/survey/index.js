import React from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

import styles from "./index.module.css";
import SurveyLayout from "../../components/survey-layout";
import SEO from "../../components/seo";
import Container from "../../components/container";
import HRBorder from "../../components/hr-border";

const SURVEY_DATA = [
  { name: "You understand", value: 6, color: "#00BF6F" },
  { name: "Didn't like it", value: 15, color: "#507CB6" },
  { name: "Neither support nor oppose", value: 3, color: "#F9BE00" },
  { name: "Other", value: 3, color: "#6BC8CD" }
];

const DIMENSION = 300;
const HALF_DIMENSION = DIMENSION / 2;
const OUTER_RADIUS = HALF_DIMENSION - 2;
const INNER_RADIUS = OUTER_RADIUS - 35;

const IndexPage = () => (
  <SurveyLayout>
    <SEO title="Survey Results" />
    <Container>
      <HRBorder />
      <div className={styles.content}>
        <h1>How did you feel about the way things ended?</h1>
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
        <h2>Comments:</h2>
        <p>
          Didnt know it was over, just stopped in out of curiosity after 10
          years away
        </p>
        <p>I was on a long hiatus when DM was retired.</p>
        <p>
          Loved my time with it since '94 and was hoping my kids would be able
          to play (now 4yo)
        </p>
        <HRBorder />
      </div>
    </Container>
  </SurveyLayout>
);

export default IndexPage;
