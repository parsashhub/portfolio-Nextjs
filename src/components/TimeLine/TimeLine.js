import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  SectionTitle2,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node?.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider divider />
      <SectionTitle>Work Experiences</SectionTitle>
      <SectionText>
        In my journey to date, I have learned a great deal about development and
        life in general.
      </SectionText>
      <SectionTitle2>Moshk Co, Tehran</SectionTitle2>
      <SectionText>Front-end Developer / Aug 2020 - Jan 2022</SectionText>
      <SectionText>
        Moshk Company started working in the field of information technology in
        the field of computer networks and information systems in 1375.
      </SectionText>
      <SectionDivider width="250px" height="1px" />
      <SectionTitle2>Novin Arzesh, Tehran</SectionTitle2>
      <SectionText>Front-end Developer / Feb 2022 - Oct 2022</SectionText>
      <SectionText>
        Novin Arzesh is a venture capital that works with the Startup Studio
        approach.
      </SectionText>
    </Section>
  );
};

export default Timeline;
