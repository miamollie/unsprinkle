import React from 'react';
import styled from 'styled-components/macro';
import OptimisedImage from '../OptimisedImage/OptimisedImage';
const Hero = () => {
  return (
    <Wrapper>
      <OptimisedImage src={"/images/hero-img.jpg"} imgComponent={<HeroImage alt="" role="presentational" src="/images/hero-img.jpg" />} />
      <Swoop src="/swoop.svg" alt="" role="presentational" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
