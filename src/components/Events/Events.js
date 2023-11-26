import dummyEvents from '../../data/dummy-events';
import EventItem from './EventItem';
import classes from './Events.module.css';
import { CardContext, EventContext } from '../Context/AppContext';
import { useContext } from 'react';

function Events() {

  const EventCtx = useContext(CardContext);


  return (
    <ul className={classes.events}>
      {dummyEvents.map((event) => (

        <EventContext.Provider value={{
          key: event.id,
          event: { event },
          isInCart: EventCtx.cartItems.some((item) => item.id === event.id),
          onAddToCart: EventCtx.onAddItemToCart(event),
          onRemoveFromCart: EventCtx.onRemoveItemFromCart(event.id)
        }}>
          <EventItem />
        </EventContext.Provider>
      ))}
    </ul>
  );
}

export default Events;
