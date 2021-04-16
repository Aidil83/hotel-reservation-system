import { Icon } from "@iconify/react";
import bxHome from "@iconify/icons-bx/bx-home";
import twotonePayments from "@iconify/icons-ic/twotone-payments";
import mail24Regular from "@iconify/icons-fluent/mail-24-regular";
import profileIcon from "@iconify/icons-gg/profile";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  return (
    <FooterContainer>
      <Icon
        icon={bxHome}
        style={{ fontSize: "38px" }}
        onClick={() => history.push("/")}
        className="icon"
      />
      <Icon
        to="/checkout"
        icon={twotonePayments}
        style={{ fontSize: "46px" }}
        onClick={() => history.push("/checkout")}
        className="icon"
      />
      <Icon
        icon={mail24Regular}
        style={{ fontSize: "41px" }}
        className="icon"
      />
      <Icon icon={profileIcon} style={{ fontSize: "35px" }} className="icon" />
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
  & .icon {
    color: #add8e6;
    cursor: pointer;
    &:hover {
      color: #44baff;
    }
  }
`;

export default Footer;
