import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { SiFrontendmentor } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/venkatesh-b29/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/venky-B" target="_blank">
        <BsGithub />
      </a>
      <a href="mailto:rajuvenkatesh29@gmail.com" target="_blank">
        <GrMail />
      </a>
      <a href="https://www.frontendmentor.io/profile/venky-B" target="_blank">
        <SiFrontendmentor />
      </a>
      <a href="https://leetcode.com/venky-B/" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;
