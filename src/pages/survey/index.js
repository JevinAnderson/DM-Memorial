import React from "react";

import SurveyLayout from "../../components/survey-layout";
import SEO from "../../components/seo";
import Container from "../../components/container";
import PieChart from "react-minimal-pie-chart";

const IndexPage = props => (
  <SurveyLayout>
    <SEO title="Survey Results" />
    <Container>
      <div className="Component Class">survey results coming soon</div>
      <PieChart
        animate={true}
        animationDuration={750}
        data={[
          { title: "You understand", value: 6, color: "#00BF6F" },
          { title: "Didn't like it", value: 15, color: "#507CB6" },
          { title: "No strong opinion", value: 3, color: "#F9BE00" },
          { title: "Other", value: 3, color: "#6BC8CD" }
        ]}
      />
    </Container>
  </SurveyLayout>
);

IndexPage.propTypes = {};

IndexPage.defaultProps = {};

export default IndexPage;
