import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";
import {
  Equipment,
  Ring,
  Neck,
  Torso,
  Head,
  Eyes,
  Ear,
  Wrist,
  Arms,
  Feet,
  Hands,
  Body,
  Waist,
  Legs,
  Shield,
  Held,
  Wielded,
  DualWielded,
  TwoHand,
  Brand
} from "../../components/equipment";

const BluePrint = () => (
  <Layout>
    <SEO title="BluePrint" />
    <Room>
      <h1>Lord BluePrint</h1>
      <p>blue</p>
      <p>
        <Equipment name="BluePrint">
          <Ring>a</Ring>
          <Ring>b</Ring>
          <Neck>A</Neck>
          <Neck>B</Neck>
          <Torso>a</Torso>
          <Head>a</Head>
          <Eyes>a</Eyes>
          <Ear>a</Ear>
          <Ear>b</Ear>
          <Legs>a</Legs>
          <Feet>a</Feet>
          <Hands>a</Hands>
          <Arms>a</Arms>
          <Shield>s</Shield>
          <Body>b</Body>
          <Waist>w</Waist>
          <Wrist>a</Wrist>
          <Wrist>b</Wrist>
          <Held>h</Held>
          <Wielded>a</Wielded>
          <DualWielded>a</DualWielded>
          <TwoHand>t</TwoHand>
          <Brand god="joja" />
        </Equipment>
      </p>
      <Exits>
        <Link to="/valhalla/banquet">The Banquet Hall</Link>
      </Exits>
    </Room>
  </Layout>
);

export default BluePrint;
