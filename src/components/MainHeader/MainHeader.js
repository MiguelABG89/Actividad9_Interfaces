import { useState, useContext } from 'react';
import { CardContext, ItemsContext } from '../Context/AppContext';

import Cart from '../Cart/Cart';
import classes from './MainHeader.module.css';

function MainHeader() {
  const [modalIsOpen, setModalIsOpen] = useState();

  function openCartModalHandler() {
    setModalIsOpen(true);
  }

  function closeCartModalHandler() {
    setModalIsOpen(false);
  }

  const numCartItems = useContext(CardContext);

  const ItemsCtxValue = {
    onCloseCard: closeCartModalHandler,
    Items: numCartItems.cartItems,
  }

  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={openCartModalHandler}>Cart ({numCartItems.cartItems})</button>
      </header>

      <ItemsContext.Provider value={{ ItemsCtxValue }}>
        {modalIsOpen && <Cart />}
      </ItemsContext.Provider>

    </>
  );
}

export default MainHeader;
