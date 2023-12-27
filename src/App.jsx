/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import appStore from "./context";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import CartSidebar from "./components/CartSidebar/index";
import Header from "./components/Header";
import Orders from "./pages/Orders";

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
   const [cartItems, setCartItems] = useState([]);
   const [favoriteItems, setFavoriteItems] = useState([]);
   const [orderItems, setOrderItems] = useState([]);
   const [cartIsOpened, setCartIsOpened] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   const [filterValue, setFilterValue] = useState("");
   const [orderId, setOrderId] = useState(0);

   const onAddToCart = async (itemData) => {
      try {
         if (cartItems.find((item) => Number(item.id) === Number(itemData.id))) {
            await axios.delete(`https://651ddfba44e393af2d5a651d.mockapi.io/cart/${itemData.id}`);
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(itemData.id)));
         } else {
            await axios.post("https://651ddfba44e393af2d5a651d.mockapi.io/cart", itemData);
            setCartItems((prev) => [...prev, itemData]);
         }
      } catch (err) {
         console.log(err);
      }
   };

   const onAddToFavorite = (itemData) => {
      if (favoriteItems.find((obj) => obj.id === itemData.id)) {
         setFavoriteItems((prev) => prev.filter((item) => item.id !== itemData.id));
      } else {
         setFavoriteItems((prev) => [...prev, itemData]);
      }
   };

   const onDeleteFromCart = async (itemData) => {
      try {
         await axios.delete(`https://651ddfba44e393af2d5a651d.mockapi.io/cart/${itemData.id}`);

         setCartItems((prev) => [...prev.filter((item) => item.id !== itemData.id)]);
      } catch (err) {
         console.log(err);
      }
   };

   const onChangeFilterValue = (e) => {
      setFilterValue(e.target.value);
   };

   const hasCartItem = (id) => {
      return cartItems.some((item) => +item.id === +id);
   };

   useEffect(() => {
      async function fetchData() {
         setIsLoading(true);

         const [catrItemsResponse, itemsRespons] = await Promise.all([
            axios.get("https://651ddfba44e393af2d5a651d.mockapi.io/cart"),
            axios.get("https://651ddfba44e393af2d5a651d.mockapi.io/items"),
         ]);

         setCartItems(catrItemsResponse.data);
         setSneakersItems(itemsRespons.data);
         setFavoriteItems(favoritesData);
         setIsLoading(false);
      }

      fetchData();
   }, []);

   return (
      <appStore.Provider
         value={{
            sneakersItems,
            cartItems,
            favoriteItems,
            orderId,
            orderItems,
            hasCartItem,
            onAddToFavorite,
            setCartIsOpened,
            setCartItems,
            setOrderItems,
            setOrderId,
         }}
      >
         <div className='wrapper clear'>
            <CartSidebar
               onCloseCart={() => setCartIsOpened(false)}
               cartItems={cartItems}
               onDeleteFromCart={(itemData) => onDeleteFromCart(itemData)}
               isVisible={cartIsOpened}
            />

            <Header onClickCart={() => setCartIsOpened(true)} />

            <Routes>
               <Route
                  path='/'
                  element={
                     <Home
                        sneakersItems={sneakersItems}
                        filterValue={filterValue}
                        cartItems={cartItems}
                        onChangeFilterValue={onChangeFilterValue}
                        setFilterValue={setFilterValue}
                        onAddToCart={onAddToCart}
                        onAddToFavorite={onAddToFavorite}
                        isLoading={isLoading}
                     />
                  }
               />
               <Route path='/favorites' element={<Favorites />} />
               <Route path='/orders' element={<Orders />} />
            </Routes>
         </div>
      </appStore.Provider>
   );
}

export default App;
