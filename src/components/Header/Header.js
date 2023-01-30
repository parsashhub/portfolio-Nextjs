import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      {/*<Link href="/">*/}
      {/*  <a style={{ display: "flex", alignItems: "center", color: "white" }} />*/}
      {/*</Link>*/}
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>Experiences</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/parsashhub">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/parsa-shabanpour-305302233">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://t.me/ParsaShabanpour">
        <FaTelegram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
