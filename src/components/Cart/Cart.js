import ReactDOM from 'react-dom';
import { ItemsContext } from '../Context/AppContext';
import classes from './Cart.module.css';
import { useContext } from 'react';

function Cart() {
  const ItemCtx = useContext(ItemsContext)

  const total = ItemCtx.Items.reduce((prevVal, item) => prevVal + item.price, 0)

  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={ItemCtx.onCloseCard} />
      <aside className={classes.cart}>
        <h2>Your Cart</h2>
        <ul>
          {ItemCtx.Items.map((item) => (
            <li key={item.id}>
              {item.title} (${item.price})
            </li>
          ))}
        </ul>
        <p className={classes.total}>Total: ${total}</p>
        <div className={classes.actions}>
          <button onClick={ItemCtx.onCloseCard}>Close</button>
          <button onClick={ItemCtx.onCloseCard}>Buy</button>
        </div>
      </aside>
    </>,
    document.getElementById("modal")
  );
}

export default Cart;
