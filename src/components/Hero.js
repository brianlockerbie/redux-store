import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Nav from "./Nav";
import Container from "./reusableComponents/Container";
import CardContainer from './CardContainer';
import ShoppingCartContainer from './ShoppingCartContainer';

const Hero = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [hiddenMenu, setHiddenMenu] = useState(false);

  const updateCart = () => {

  }

  return (
    <section className="hero">
      <Nav />
      <Container>
          <CardContainer updateCart={updateCart} />
          <ShoppingCartContainer 
            hiddenMenu={hiddenMenu}
            cartItems={cartItems}
            totalPrice={totalPrice}
            itemCount={itemCount}
          />
      </Container>
    </section>
  );
};

export default Hero;