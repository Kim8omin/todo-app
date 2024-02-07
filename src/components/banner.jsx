import React from "react";
import ball from "../assets/ball.png";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerWrapper>
      <img src={ball} alt="ball" />
      <BannerText>Just Do it ! </BannerText>
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
  text-shadow: rgba(0,0,0,0.5) 1px 1px 2px;
`;
