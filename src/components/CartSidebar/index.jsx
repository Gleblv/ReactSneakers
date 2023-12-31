import React from "react";

import appStore from "../../context";

import Info from "../Info";

import styles from "./CartSidebar.module.scss";

const CartSidebar = ({ onCloseCart, cartItems = [], onDeleteFromCart, isVisible }) => {
   const [isComplete, setIsComplete] = React.useState(false);

   const { setCartItems, orderId, setOrderId, setOrderItems } = React.useContext(appStore);

   const totalItemsPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0);

   const onClickOrder = () => {
      try {
         setOrderId((prev) => prev + 1);
         setIsComplete(true);
         setCartItems([]);
         setOrderItems((prev) => [...prev, ...cartItems]);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className={`${styles.overlay} ${isVisible ? styles.overlayActive : ""}`}>
         <div className={`${styles.sidebar} p-30 d-flex flex-column`}>
            <h2 className='mb-30 d-flex align-center justify-between'>
               Корзина
               <img onClick={onCloseCart} className='removeBtn' src='img/btn-remove.svg' alt='remove' />
            </h2>

            {cartItems.length > 0 ? (
               <>
                  <div className='items'>
                     {cartItems.map((item) => (
                        <div className='cartItem d-flex align-center mb-20'>
                           <div
                              style={{
                                 backgroundImage: `url(${item.imgUrl})`,
                              }}
                              className='cartItemImg'
                           ></div>
                           <div className='mr-20'>
                              <p className='mb-5'>{item.name}</p>
                              <b>{item.price} руб.</b>
                           </div>
                           <img
                              className='removeBtn'
                              src='img/btn-remove.sg'
                              alt='remove'
                              onClick={() => onDeleteFromCart(item)}
                           />
                        </div>
                     ))}
                  </div>
                  <ul className='cartTotalBlock'>
                     <li className='d-flex align-center justify-between mb-20'>
                        <span>Итого: </span>
                        <div></div>
                        <b>{totalItemsPrice} руб. </b>
                     </li>
                     <li className='d-flex align-center justify-between mb-25'>
                        <span>Налог 5%: </span>
                        <div></div>
                        <b>{totalItemsPrice * 0.05} руб. </b>
                     </li>
                     <button onClick={onClickOrder} className='greenButton'>
                        Оформить заказ
                     </button>
                  </ul>
               </>
            ) : (
               <Info
                  title={isComplete ? "Заказ оформлен!" : "Корзина пуста"}
                  description={
                     isComplete
                        ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                        : "Добавте хотя бы одну пару кроссовок !"
                  }
                  image={isComplete ? "./img/cart-complete.png" : "./img/cart-empty.png"}
               />
            )}
         </div>
      </div>
   );
};

export default CartSidebar;
