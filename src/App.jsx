/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";

import CartSidebar from "./components/CartSidebar";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
   const [sneakersItems, setSneakersItems] = useState([]);
   const [cartIsOpened, setCartIsOpened] = useState(false);
   const [cartItems, setCartItems] = useState([]);

   const onAddToCart = (itemData) => {
      setCartItems((prev) => {
         if (prev.find((item) => item.name === itemData.name)) {
            return [...prev.filter((item) => item.name !== itemData.name)];
         }

         return [...prev, itemData];
      });
   };

   useEffect(() => {
      fetch("https://651ddfba44e393af2d5a651d.mockapi.io/items")
         .then((res) => res.json())
         .then((items) => setSneakersItems(items));
   }, []);

   return (
      <div className="wrapper clear">
         {cartIsOpened && (
            <CartSidebar
               onCloseCart={() => setCartIsOpened(false)}
               cartItems={cartItems}
            />
         )}

         <Header onClickCart={() => setCartIsOpened(true)} />
         <div className="content p-40 clear">
            <div className="mb-40 d-flex align-center justify-between">
               <h1>Все кроссовки</h1>
               <div className="search-block d-flex align-center">
                  <img src="/img/search.svg" alt="serch-svg" />
                  <input placeholder="Поиск..." />
               </div>
            </div>
            <div className="d-flex flex-wrap">
               {sneakersItems.map(({ name, price, imgUrl }) => (
                  <Card
                     name={name}
                     price={price}
                     imgUrl={imgUrl}
                     onClickFavorite={() => console.log("Добавили в избранное")}
                     onPlus={(itemData) => onAddToCart(itemData)}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
