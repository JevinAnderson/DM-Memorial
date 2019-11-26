import React from "react";

import styles from "./index.module.css";
import SurveyLayout from "../../components/survey-layout";
import SEO from "../../components/seo";
import Container from "../../components/container";
import HRBorder from "../../components/hr-border";

const Character = () => (
  <SurveyLayout>
    <SEO title="Character" />
    <Container>
      <HRBorder />
      <div className={styles.content}>
        <h1>
          Who was your favorite character in dm that you didn't play? Mortal or
          immortal... Why?
        </h1>
        <p>Fizzfaldt; never failed to get a laugh.</p>
        <p>Apharion</p>
        <p>
          Bronewhenne - She made me feel warm and tingly, exactly what it would
          be like to meet a Goddess. Fastolph - He double backstabbed me in his
          shrine, thinking that I'd survive the hits, I didn't. Valgaav - Taught
          me to be actually Lawful Good (Lifer Paladin, human). Bonus, people I
          didn't like: Chris M. from Detroit was an actual IRL friend that got
          the entirety of Michigan sitebanned because of social engineering, and
          gaining actual admin access to MOST of dm's Pfiles.
        </p>
        <p>
          Drintazt. He was a very good IC friend to 2 of my characters, a very
          good RPer, and really seemed to deepen my immersion in the game.
        </p>
        <p>
          Azli. I don't feel like anyone could have encapsulated Isimsiz'
          religion quite as well as she did. She was also badass incarnate,
          imho.
        </p>
        <p>
          Malignus. Played with him a lot while he was mortal. Love the drow
          clan he founded. One of my favorites chars ended up being master of
          Fear in the clan.
        </p>
        <p>Morrbway.. Always a class act.</p>
        <p>Ichiban</p>
        <p>
          Fizzfaldt. Playing tag in glyndane with Fizz is undoubtedly the first
          time I fell in love with the game.
        </p>
        <p>Stren channeling loki a swashbuckling thief</p>
        <p>Early Fastolph. During the child like innocence days</p>
        <p>Vledimire</p>
        <p>
          Rungekutta. Great RP and tenants and had a lot of great interactions
        </p>
        <p>Ander</p>
        <p>Joja - She was always very fair. Always willing to interact.</p>
        <p>Nimnryth</p>
        <p>Leifdei - Just a great character to play with and great RP</p>
        <p>murdok</p>
        <p>
          Yophlin - I was young and early enough in the game that I didn't
          understand all of what was happening when interacting with them, I
          just remember being so impressed by how cool and in control the
          character was.
        </p>
        <p>
          Ilphyrn. I only had a few RP opportunities with him, but every one was
          a treat. That guy was next level.
        </p>
        <p>Faenor (Leader of Life; elf hunter)</p>
        <HRBorder />
      </div>
    </Container>
  </SurveyLayout>
);

export default Character;
