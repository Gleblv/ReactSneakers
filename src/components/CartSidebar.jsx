const CartSidebar = ({ onCloseCart, cartItems = [], onDeleteFromCart }) => {
   return (
      <div className="overlay">
         <div className="sidebar p-30 d-flex flex-column">
            <h2 className="mb-30 d-flex align-center justify-between">
               Корзина
               <img
                  onClick={onCloseCart}
                  className="removeBtn"
                  src="img/btn-remove.svg"
                  alt="remove"
               />
            </h2>
            <div className="items">
               {cartItems.map((item) => (
                  <div className="cartItem d-flex align-center mb-20">
                     <div
                        style={{
                           backgroundImage: `url(${item.imgUrl})`,
                        }}
                        className="cartItemImg"
                     ></div>
                     <div className="mr-20">
                        <p className="mb-5">{item.name}</p>
                        <b>{item.price} руб.</b>
                     </div>
                     <img
                        className="removeBtn"
                        src="img/btn-remove.svg"
                        alt="remove"
                        onClick={() => onDeleteFromCart(item)}
                     />
                  </div>
               ))}
            </div>
            <ul className="cartTotalBlock">
               <li className="d-flex align-center justify-between mb-20">
                  <span>Итого: </span>
                  <div></div>
                  <b>21 498 руб. </b>
               </li>
               <li className="d-flex align-center justify-between mb-25">
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб. </b>
               </li>
               <button className="greenButton">Оформить заказ</button>
            </ul>
         </div>
      </div>
   );
};

export default CartSidebar;
