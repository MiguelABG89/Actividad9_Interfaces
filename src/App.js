import { useState } from 'react';

import Events from './components/Events/Events';
import MainHeader from './components/MainHeader/MainHeader';
import { CardContext } from './components/Context/AppContext';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItemHandler(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeItemHandler(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  const CardCtxValue = {
    cartItems: cartItems,
    onAddItemToCart: addItemHandler,
    onRemoveItemFromCart: removeItemHandler
  }

  return (
    <CardContext.Provider value={{ CardCtxValue }}>
      <MainHeader />
      <Events />
    </CardContext.Provider>

  );
}

export default App;
