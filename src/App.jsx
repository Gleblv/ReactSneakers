/* eslint-disable jsx-a11y/alt-text */
function App() {
   return (
      <div className="wrapper clear">
         <div className="overlay">
            <div className="sidebar p-30 d-flex flex-column">
               <h2 className="mb-30 d-flex align-center justify-between">
                  Корзина
                  <img
                     className="removeBtn"
                     src="img/btn-remove.svg"
                     alt="remove"
                  />
               </h2>
               <div className="items">
                  <div className="cartItem d-flex align-center mb-20">
                     <div
                        style={{
                           backgroundImage: "url(/img/sneaker-image-1.jpg)",
                        }}
                        className="cartItemImg"
                     ></div>
                     <div className="mr-20">
                        <p className="mb-5">
                           Мужские Кроссовки Nike Air Max 270
                        </p>
                        <b>12 999 руб.</b>
                     </div>
                     <img
                        className="removeBtn"
                        src="img/btn-remove.svg"
                        alt="remove"
                     />
                  </div>
                  <div className="cartItem d-flex align-center mb-20">
                     <div
                        style={{
                           backgroundImage: "url(/img/sneaker-image-1.jpg)",
                        }}
                        className="cartItemImg"
                     ></div>
                     <div className="mr-20">
                        <p className="mb-5">
                           Мужские Кроссовки Nike Air Max 270
                        </p>
                        <b>12 999 руб.</b>
                     </div>
                     <img
                        className="removeBtn"
                        src="img/btn-remove.svg"
                        alt="remove"
                     />
                  </div>
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

         <header className="d-flex justify-between align-center p-40">
            <div className="headerLeft d-flex align-center">
               <img className="mr-10" src="/img/logo.svg" />
               <div className="headerLeft__box">
                  <h3 className="headerLeft__title text-uppercase">
                     REACT SNEAKERS
                  </h3>
                  <p className="headerLeft__subtitle">
                     Магазин лучших кроссовок
                  </p>
               </div>
            </div>
            <ul className="headerRight d-flex">
               <li className="mr-30 d-flex align-center">
                  <svg
                     className="mr-10"
                     xmlns="http://www.w3.org/2000/svg"
                     width="20"
                     height="20"
                     viewBox="0 0 20 20"
                     fill="none"
                  >
                     <path
                        d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                        stroke="#9B9B9B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                        stroke="#9B9B9B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                     <path
                        d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                        stroke="#9B9B9B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
                  <span>1205 руб.</span>
               </li>
               <li>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="18"
                     height="18"
                     viewBox="0 0 18 18"
                     fill="none"
                  >
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 9C0 4.1211 4.1211 0 9 0C13.8789 0 18 4.1211 18 9C18 11.871 16.5672 14.4702 14.4 16.1316V16.2H14.3082C12.807 17.3205 10.9683 18 9 18C7.0317 18 5.193 17.3205 3.6918 16.2H3.6V16.1316C1.4328 14.4702 0 11.8701 0 9ZM6.41112 13.7124C5.93239 14.0975 5.59923 14.6344 5.4666 15.2343C6.5178 15.8436 7.7256 16.2 9 16.2C10.2744 16.2 11.4822 15.8436 12.5334 15.2343C12.4006 14.6344 12.0674 14.0977 11.5887 13.7126C11.11 13.3275 10.5144 13.1169 9.9 13.1157H8.1C7.48557 13.1168 6.88986 13.3272 6.41112 13.7124ZM12.391 12.0705C13.129 12.5617 13.7057 13.2596 14.049 14.0769C15.3693 12.7638 16.2 10.9584 16.2 9C16.2 5.0967 12.9033 1.8 9 1.8C5.0967 1.8 1.8 5.0967 1.8 9C1.8 10.9584 2.6307 12.7638 3.951 14.0769C4.2943 13.2596 4.87104 12.5617 5.60904 12.0705C6.34704 11.5794 7.21351 11.3168 8.1 11.3157H9.9C10.7865 11.3168 11.653 11.5794 12.391 12.0705ZM5.40001 7.2C5.40001 5.148 6.94801 3.6 9.00001 3.6C11.052 3.6 12.6 5.148 12.6 7.2C12.6 9.252 11.052 10.8 9.00001 10.8C6.94801 10.8 5.40001 9.252 5.40001 7.2ZM7.20001 7.2C7.20001 8.2602 7.93981 9 9.00001 9C10.0602 9 10.8 8.2602 10.8 7.2C10.8 6.1398 10.0602 5.4 9.00001 5.4C7.93981 5.4 7.20001 6.1398 7.20001 7.2Z"
                        fill="#9B9B9B"
                     />
                  </svg>
               </li>
            </ul>
         </header>
         <div className="content p-40 clear">
            <div className="mb-40 d-flex align-center justify-between">
               <h1>Все кроссовки</h1>
               <div className="search-block d-flex align-center">
                  <img src="/img/search.svg" alt="serch-svg" />
                  <input placeholder="Поиск..." />
               </div>
            </div>
            <div className="d-flex">
               <div className="card mr-30">
                  <div className="favorite">
                     <img src="/img/heart-unliked.svg" alt="Unlike" />
                  </div>
                  <img
                     className="mb-15"
                     width={133}
                     height={112}
                     src="/img/sneaker-image-1.jpg"
                     alt=""
                  />
                  <h5 className="mb-15">
                     Мужские Кроссовки Nike Blazer Mid Suede
                  </h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                     </div>
                     <button>
                        <img src="/img/btn-plus.svg" alt="add to cart" />
                     </button>
                  </div>
               </div>
               <div className="card mr-30">
                  <div className="favorite">
                     <img src="/img/heart-unliked.svg" alt="Unlike" />
                  </div>
                  <img
                     className="mb-15"
                     width={133}
                     height={112}
                     src="/img/sneaker-image-1.jpg"
                     alt=""
                  />
                  <h5 className="mb-15">
                     Мужские Кроссовки Nike Blazer Mid Suede
                  </h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                     </div>
                     <button>
                        <img src="/img/btn-plus.svg" alt="add to cart" />
                     </button>
                  </div>
               </div>
               <div className="card mr-30">
                  <div className="favorite">
                     <img src="/img/heart-unliked.svg" alt="Unlike" />
                  </div>
                  <img
                     className="mb-15"
                     width={133}
                     height={112}
                     src="/img/sneaker-image-1.jpg"
                     alt=""
                  />
                  <h5 className="mb-15">
                     Мужские Кроссовки Nike Blazer Mid Suede
                  </h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                     </div>
                     <button>
                        <img src="/img/btn-plus.svg" alt="add to cart" />
                     </button>
                  </div>
               </div>
               <div className="card mr-30">
                  <div className="favorite">
                     <img src="/img/heart-unliked.svg" alt="Unlike" />
                  </div>
                  <img
                     className="mb-15"
                     width={133}
                     height={112}
                     src="/img/sneaker-image-1.jpg"
                     alt=""
                  />
                  <h5 className="mb-15">
                     Мужские Кроссовки Nike Blazer Mid Suede
                  </h5>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                     </div>
                     <button>
                        <img src="/img/btn-plus.svg" alt="add to cart" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
