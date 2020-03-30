import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Room from "../../components/room";
import Exits from "../../components/exits";
import { Link } from "gatsby";

const Osric = () => (
  <Layout>
    <SEO title="Osric" />
    <Room>
      <h1>Osric Neverbourne</h1>
      <p>
        Standing before you is a brawny Dwarf. He stands near 10 hands high, and
        seems to be just just as wide. He stands on two trunk-like legs that are
        spread wide to give him the balance he needs to wield his massive axe.
        He has a long flowing red beard that drapes down to his huge belt
        buckle. His huge arms bulge with thick corded muscle as he hefts his axe
        to his shoulder where it rests ready for use. His face is grizzled and
        weathered from years in the tunnels of the under dark. Where his left
        eye is supposed to be there is a bolted steel plate that covers the
        socket that is now empty from some long ago battle, the scare still
        mares his left half of his face from chin to forehead. The right side of
        his face is covered in small Dwarven runes, they are tattooed is black
        ink. The tattoos end at the bridge of his nose, where his weathered face
        is void of all tattoos.
        <br />
        ** Upon his left hand there is a tatoo of a Dagger wreathed in flames,
        dripping blood.**
        <br />
        *Upon his left shoulder is a tattoo of a gleaming BROADSWORD wreathed in
        dancing lightning*
        <br />
        *Upon his left forearm there is a tattoo of a heavy headed WARHAMMER, it
        is draped is a red tapestry.*
        <br />
        ** Upon his neck there is a tattoo that reads WARLORD, it is in red
        ink.**
      </p>
      <Exits>
        <Link to="/valhalla/keep/armory">The Armory</Link>
      </Exits>
    </Room>
  </Layout>
);

export default Osric;
