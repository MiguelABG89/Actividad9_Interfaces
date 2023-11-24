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

  const CardCtxValue={
    onAddItemToCart: addItemHandler,
    onRemoveItemFromCart: removeItemHandler,
    cartItems: cartItems,
  }

  return (
    <>
      <CardContext.Provider value={{CardCtxValue}}>
        <MainHeader/>
      </CardContext.Provider>
      
      <main>
        <Events
          onAddItemToCart={addItemHandler}
          onRemoveItemFromCart={removeItemHandler}
          cartItems={cartItems}
        />
      </main>
    </>
  );
}

export default App;
