import React from 'react';

import { connect } from 'react-redux';
import {
  clearItemFromCart,
  decrementItem,
  addItem,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, decrementItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decrementItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'> {quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (cartItem) => dispatch(clearItemFromCart(cartItem)),
  decrementItem: (cartItem) => dispatch(decrementItem(cartItem)),
  addItem: (cartItem) => dispatch(addItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
