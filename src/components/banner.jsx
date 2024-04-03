import React from "react";
import ball from "../assets/ball.png";
import styled from "styled-components";

const Banner = ({ testRef }) => {
  return (
    <BannerWrapper id="mainSection">
      <img src={ball} alt="ball" ref={testRef} />
      <BannerText>Just Dive in ! </BannerText>
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  overflow: hidden;

  img {
    width: 100%;
    max-height: 550px;
  }
`;

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  font-weight: bold;
  color: white;
  transition: all 0s ease 0s;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
