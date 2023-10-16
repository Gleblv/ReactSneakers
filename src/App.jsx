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
   const [favoriteItems, setFavoriteItems] = useState([]);
   const [filterValue, setFilterValue] = useState("");

   const onAddToCart = (itemData) => {
      axios.post("https://651ddfba44e393af2d5a651d.mockapi.io/cart", itemData);

      setCartItems((prev) => {
         return [...prev, itemData];
      });
   };

   const onAddToFavorite = (itemData) => {
      setFavoriteItems((prev) => [...prev, itemData]);
   };

   const onDeleteFromCart = (itemData) => {
      axios.delete(
         `https://651ddfba44e393af2d5a651d.mockapi.io/cart/${itemData.id}`
      );

      setCartItems((prev) => [
         ...prev.filter((item) => item.id !== itemData.id),
      ]);
   };

   const onChangeFilterValue = (e) => {
      setFilterValue(e.target.value);
   };

   useEffect(() => {
      axios
         .get("https://651ddfba44e393af2d5a651d.mockapi.io/items")
         .then((res) => setSneakersItems(res.data));
      axios
         .get("https://651ddfba44e393af2d5a651d.mockapi.io/cart")
         .then((res) => setCartItems(res.data));
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
                  .map(({ name, price, imgUrl, id }, index) => (
                     <Card
                        key={index}
                        id={id}
                        name={name}
                        price={price}
                        imgUrl={imgUrl}
                        onPlus={(itemData) => onAddToCart(itemData)}
                        onAddToFavorite={(itemData) =>
                           onAddToFavorite(itemData)
                        }
                     />
                  ))}
            </div>
         </div>
      </div>
   );
}

export default App;
