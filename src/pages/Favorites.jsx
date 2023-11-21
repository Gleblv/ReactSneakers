import { useContext } from "react";

import appStore from "../context";

import Card from "../components/Card";

const Favorites = () => {
   const { favoriteItems, onAddToFavorite } = useContext(appStore);

   return (
      <div className='content p-40 clear'>
         <div className='mb-40 d-flex align-center justify-between'>
            <h1>Мои закладки</h1>
         </div>
         <div className='d-flex flex-wrap'>
            {favoriteItems.map((item, index) => (
               <Card key={index} favorited={true} onAddToFavorite={onAddToFavorite} {...item} />
            ))}
         </div>
      </div>
   );
};

export default Favorites;
