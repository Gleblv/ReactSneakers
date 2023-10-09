/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import axios from "axios";

import CartSidebar from "./components/CartSidebar";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
   const [sneakersItems, setSneakersItems] = useState([]);
   const [cartIsOpened, setCartIsOpened] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [filterValue, setFilterValue] = useState("");

   const onAddToCart = (itemData) => {
      axios.post("https://651ddfba44e393af2d5a651d.mockapi.io/cart", itemData);

      setCartItems((prev) => {
         if (prev.find((item) => item.name === itemData.name)) {
            return [...prev.filter((item) => item.name !== itemData.name)];
         } else {
            return [...prev, itemData];
         }
      });
   };

   const onDeleteFromCart = (itemData) => {
      setCartItems((prev) => [
         ...prev.filter((item) => item.name !== itemData.name),
      ]);
   };

   const onChangeFilterValue = (e) => {
      setFilterValue(e.target.value);
   };

   useEffect(() => {
      axios
         .get("https://651ddfba44e393af2d5a651d.mockapi.io/items")
         .then((res) => setSneakersItems(res.data));
   }, []);

   return (
      <div className="wrapper clear">
         {cartIsOpened && (
            <CartSidebar
               onCloseCart={() => setCartIsOpened(false)}
               cartItems={cartItems}
               onDeleteFromCart={(itemData) => onDeleteFromCart(itemData)}
            />
         )}

         <Header onClickCart={() => setCartIsOpened(true)} />
         <div className="content p-40 clear">
            <div className="mb-40 d-flex align-center justify-between">
               <h1>
                  {filterValue
                     ? `Поиск по запросу: "${filterValue}"`
                     : "Все кроссовки"}
               </h1>
               <div className="search-block d-flex align-center">
                  <img src="/img/search.svg" alt="serch-svg" />
                  <input
                     placeholder="Поиск..."
                     onChange={onChangeFilterValue}
                     value={filterValue}
                  />
                  {filterValue && (
                     <img
                        className="removeFilterBtn"
                        src="img/btn-remove.svg"
                        alt="remove"
                        onClick={() => setFilterValue("")}
                     />
                  )}
               </div>
            </div>
            <div className="d-flex flex-wrap">
               {sneakersItems
                  .filter((item) =>
                     item.name.toLowerCase().includes(filterValue.toLowerCase())
                  )
                  .map(({ name, price, imgUrl }, index) => (
                     <Card
                        key={index}
                        name={name}
                        price={price}
                        imgUrl={imgUrl}
                        onClickFavorite={() =>
                           console.log("Добавили в избранное")
                        }
                        onPlus={(itemData) => onAddToCart(itemData)}
                     />
                  ))}
            </div>
         </div>
      </div>
   );
}

export default App;
