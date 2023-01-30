import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />

            <HeaderThree title={p.title}>{p.title}</HeaderThree>
            <Hr />

            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              {p.visit ? (
                <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
              ) : null}
              {p.source ? (
                <ExternalLinks href={p.source}>Source Code</ExternalLinks>
              ) : null}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    <SectionText>
      Besides the projects I’ve just mentioned, I had some projects such as,
      Cryptocurrency exchange, online store , again admin dashboards, and even
      some public repositories on my gitHub.
    </SectionText>
  </Section>
);

export default Projects;
