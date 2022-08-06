import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaLine,
  FaAddressCard,
  FaMobile,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { TbWall } from "react-icons/tb";
import { HiOutlineDesktopComputer } from "react-icons/hi";

import {
  ContactBox,
  CopyRight,
  FooterContainer,
  FooterInformation,
  FooterSocialIcon,
  IconBox,
} from "./Footer.Style";

function Footer() {
  const style = {
    fontSize: "2rem",
  };

  const header = {
    marginBottom: "10px",
    color: "yellow",

    fontSize: "20px",
  };

  const list = {
    listStyleType: "none",
  };

  const devision = {
    margin: " 0 50px",
  };

  const color = {
    color: "yellow",
  };
  return (
    <FooterContainer id="footer">
      <FooterSocialIcon>
        <IconBox>
          <FaFacebook style={style} />
        </IconBox>
        <IconBox>
          <FaInstagram style={style} />
        </IconBox>
        <IconBox>
          <FaTwitter style={style} />
        </IconBox>
        <IconBox>
          <FaGoogle style={style} />
        </IconBox>
        <IconBox>
          <FaLine style={style} />
        </IconBox>
      </FooterSocialIcon>
      <FooterInformation>
        <CopyRight>This is copy right</CopyRight>
        <ContactBox>
          <div style={devision}>
            <h4 style={header}>Contact-Us</h4>
            <ul>
              <li style={list}>
                <BsFillTelephoneFill style={color} /> - 09-123456789
              </li>
              <li style={list}>
                <MdEmail style={color} /> - aaaaaaa@gamil.com
              </li>
              <li style={list}>
                <FaAddressCard style={color} /> - N0-1,A Street, B Road , C
                Ctiy, D Country
              </li>
            </ul>
          </div>
          <div style={devision}>
            <h4 style={header}>About-Us</h4>
            <ul>
              <li style={list}> We are Team </li>
              <li style={list}>We are hard Word</li>
              <li style={list}>We are Developer</li>
            </ul>
          </div>
          <div style={devision}>
            <h4 style={header}>Services</h4>
            <ul>
              <li style={list}>
                <CgWebsite style={color} /> - Web App
              </li>
              <li style={list}>
                <FaMobile style={color} /> - Mobile App
              </li>
              <li style={list}>
                <HiOutlineDesktopComputer style={color} /> - DeskTop App
              </li>
              <li style={list}>
                <TbWall style={color} /> - Cross Platform
              </li>
            </ul>
          </div>
        </ContactBox>
      </FooterInformation>
    </FooterContainer>
  );
}

export default Footer;
