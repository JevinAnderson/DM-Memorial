import React from "react";

import styles from "./404.module.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="The Void" />
    <div className={styles.content}>
      <p>
        You can hear laughter all around you as you stumble into the darkness.
        There is nothing here. You have entered the void. Even your own body is
        fading away. Your very essence is as nothing in this place.
      </p>
      <p>
        You hear Lord Xurinos speak to your very being, "Isn't it beautiful?
        Stay awhile, or forever. Time has no meaning here..."
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
