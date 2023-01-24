import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Link from "next/link";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there,
        </SectionTitle>
        <SectionText>
          This is Parsa Shabanpour, a Programmer and web designer with almost 3
          years of specialized programming work.
        </SectionText>
        <Link href="/files/Parsa_Shabanpour_resume.pdf" passHref>
          <Button>My Resume</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
