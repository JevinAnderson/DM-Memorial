import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Bleyard = () => (
  <Layout>
    <SEO title="Bleyard" />
    <Room>
      <h1>Bleyard</h1>
      <p>
        A large oaf of a giant looms, looking like it belongs in a forest of
        stupid trees, a sharp glint in his eye proves otherwise. The radiant
        emerald green tint of his eyes matches the skin and fur patching out
        about his person everywhere, furled around large biceps, forearms and
        full, thick legs. He stands tall at 13', but he looks like a regular
        piece of scenery, and doesn't seem too obtrusive. He almost looks like
        an out of place garden, roaming innocently. Looking more fresh than his
        weathered skin is a black tattoo, just below his collarbone, laterally
        across his chest; a flat, long-handled dagger. His right thigh holds the
        hilt of a large broadsword tattoo that runs to its tip at the bottom of
        his shin. Over the bumps of fauna and muscle rippling his back, the
        handle of a Warhammer tattoo stretches up his spine and the maul of the
        hammer stretches out over his massive right shoulderblade. A menacing
        looking double-sided BattleAxe is stretched across both his pectorcal
        muscles, on a slight slant- the handle stretches down into the right
        part of his hip.
        <br />A horizontal burn mark, a fluorescent green battleaxe, crosses his
        forehead. It's mostly dark, but looks to be pulsing.
      </p>
      <Exits>
        <Link to="/valhalla/keep/large-barracks">
          A large Crusader Barracks
        </Link>
      </Exits>
    </Room>
  </Layout>
);

export default Bleyard;
