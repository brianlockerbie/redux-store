import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Nav from "./Nav";
import Container from "./reusableComponents/Container";

const Hero = () => {
  return (
    <section className="hero">
      <Nav />
      <Container></Container>
    </section>
  );
};

export default Hero;