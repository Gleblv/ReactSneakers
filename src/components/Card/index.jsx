import { useState, useContext } from "react";
import ContentLoader from "react-content-loader";

import appStore from "../../context";

import styles from "./Card.module.scss";

const Card = ({
   name,
   price,
   imgUrl,
   id,
   onPlus,
   onAddToFavorite,
   favorited = false,
   added = false,
   loading,
}) => {
   const { hasCartItem } = useContext(appStore);

   const [isFavorite, setIsFavorite] = useState(favorited);

   const onClickPlus = () => {
      onPlus({ name, price, imgUrl, id });
   };

   const onClickFavorite = () => {
      onAddToFavorite({ name, price, imgUrl, id });
      setIsFavorite(!isFavorite);
   };

   return (
      <div className={styles.card}>
         {loading ? (
            <ContentLoader
               className='cu-p'
               speed={2}
               width={150}
               height={187}
               viewBox='0 0 150 187'
               backgroundColor='#f3f3f3'
               foregroundColor='#e7f6ff'
            >
               <rect x='0' y='0' rx='10' ry='10' width='150' height='91' />
               <rect x='0' y='107' rx='3' ry='3' width='150' height='15' />
               <rect x='0' y='126' rx='3' ry='3' width='93' height='15' />
               <rect x='0' y='163' rx='8' ry='8' width='80' height='24' />
               <rect x='118' y='155' rx='8' ry='8' width='32' height='32' />
            </ContentLoader>
         ) : (
            <>
               <div className={styles.favorite}>
                  <img
                     onClick={onClickFavorite}
                     src={isFavorite ? "/img/hear-liked.svg" : "/img/heart-unliked.svg"}
                     alt='Unlike'
                  />
               </div>
               <img className='mb-15' width={133} height={112} src={imgUrl} alt='' />
               <h5 className='mb-15'>{name}</h5>
               <div className='d-flex justify-between align-center'>
                  <div className='d-flex flex-column'>
                     <span>Цена:</span>
                     <b>{price} руб.</b>
                  </div>
                  <img
                     className={styles.plus}
                     onClick={onClickPlus}
                     src={hasCartItem(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                     alt='add to cart'
                  />
               </div>
            </>
         )}
      </div>
   );
};

export default Card;
