import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Download Template</LinkTitle>
            <LinkItem href="https://github.com/lordarcadius" target="_blank">
              Link
            </LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:parsash1380@gmail.com">
              parsash1380@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialContainer>
          <SocialIcons href="https://github.com/parsashhub">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/parsa-shabanpour-305302233">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://t.me/ParsaShabanpour">
            <FaTelegram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
