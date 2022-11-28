import { useReducer } from 'react';
import CartContext from './cart-context';

/* logica para agregar articulos */
const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  let cartActionsHandler;

  switch (action.type) {
    case 'ADD_ITEMS':
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      cartActionsHandler = {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
      break;
    case 'REMOVE_ITEMS':
      break;
    default:
      cartActionsHandler = defaultCartState;
  }
  return cartActionsHandler;
};

/* Este archivo permite manejar la informacion que se manda al cart-context*/
export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = item => {
    dispatchCartAction({
      type: 'ADD_ITEMS',
      item: item,
    });
  };

  const removeItemFromCart = id => {
    dispatchCartAction({
      type: 'REMOVE_ITEMS',
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart
  };

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
};