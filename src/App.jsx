/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import CartSidebar from "./components/CartSidebar";
import Header from "./components/Header";

const favoritesData = [
   {
      id: 1,
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      imgUrl: "/img/sneaker-image-1.jpg",
   },
   { id: 2, name: "Мужские Кроссовки Nike Air Max 270", price: 15600, imgUrl: "/img/sneaker-image-2.jpg" },
   {
      id: 3,
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8900,
      imgUrl: "/img/sneaker-image-3.jpg",
   },
];

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
      if (favoriteItems.find((obj) => obj.id === itemData.id)) {
         setFavoriteItems((prev) => prev.filter((item) => item.id !== itemData.id));
      } else {
         setFavoriteItems((prev) => [...prev, itemData]);
      }
   };

   const onDeleteFromCart = (itemData) => {
      axios.delete(`https://651ddfba44e393af2d5a651d.mockapi.io/cart/${itemData.id}`);

      setCartItems((prev) => [...prev.filter((item) => item.id !== itemData.id)]);
   };

   const onChangeFilterValue = (e) => {
      setFilterValue(e.target.value);
   };

   useEffect(() => {
      axios
         .get("https://651ddfba44e393af2d5a651d.mockapi.io/items")
         .then((res) => setSneakersItems(res.data));

      axios.get("https://651ddfba44e393af2d5a651d.mockapi.io/cart").then((res) => setCartItems(res.data));

      setFavoriteItems(favoritesData);
   }, []);

   return (
      <div className='wrapper clear'>
         {cartIsOpened && (
            <CartSidebar
               onCloseCart={() => setCartIsOpened(false)}
               cartItems={cartItems}
               onDeleteFromCart={(itemData) => onDeleteFromCart(itemData)}
            />
         )}

         <Header onClickCart={() => setCartIsOpened(true)} />

         <Routes>
            <Route
               path='/'
               element={
                  <Home
                     sneakersItems={sneakersItems}
                     filterValue={filterValue}
                     onChangeFilterValue={onChangeFilterValue}
                     setFilterValue={setFilterValue}
                     onAddToCart={onAddToCart}
                     onAddToFavorite={onAddToFavorite}
                  />
               }
            />
            <Route
               path='/favorites'
               element={<Favorites favoriteItems={favoriteItems} onAddToFavorite={onAddToFavorite} />}
            />
         </Routes>
      </div>
   );
}

export default App;
