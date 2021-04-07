import { Icon } from "@iconify/react";
import bxHome from "@iconify/icons-bx/bx-home";
import twotonePayments from "@iconify/icons-ic/twotone-payments";
import mail24Regular from "@iconify/icons-fluent/mail-24-regular";
import profileIcon from "@iconify/icons-gg/profile";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Icon icon={bxHome} style={{ color: "#add8e6", fontSize: "38px" }} />
      <Icon
        icon={twotonePayments}
        style={{ color: "#add8e6", fontSize: "46px" }}
      />
      <Icon
        icon={mail24Regular}
        style={{ color: "#add8e6", fontSize: "41px" }}
      />
      <Icon icon={profileIcon} style={{ color: "#add8e6", fontSize: "35px" }} />
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 10%;
  height: 63px;
  width: 80%;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Footer;
