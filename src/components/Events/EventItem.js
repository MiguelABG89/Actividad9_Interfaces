import { EventContext } from '../Context/AppContext';
import classes from './EventItem.module.css';
import { useContext } from 'react';
function EventItem() {

  const EventItemCtx = useContext(EventContext)

  let buttonCaption = 'Add to Cart';
  let buttonAction = EventItemCtx.onAddToCart;

  if (EventItemCtx.isInCart) {
    buttonCaption = 'Remove from Cart';
    buttonAction = EventItemCtx.onRemoveFromCart;
  }

  return (
    <li className={classes.event}>
      <img src={EventItemCtx.event.image} alt={EventItemCtx.event.title} />
      <div className={classes.content}>
        <h2>{EventItemCtx.event.title}</h2>
        <p className={classes.price}>${EventItemCtx.event.price}</p>
        <p>{EventItemCtx.event.description}</p>
        <div className={classes.actions}>
          <button onClick={buttonAction}>{buttonCaption}</button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
