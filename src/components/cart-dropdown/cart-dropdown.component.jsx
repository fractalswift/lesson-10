import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// original code before adding createStructuredSelector

// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
// });

// original code before reslect/memoization:
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

export default connect(mapStateToProps)(CartDropdown);
