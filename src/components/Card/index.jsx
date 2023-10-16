import { useState } from "react";

import styles from "./Card.module.scss";

const Card = ({ name, price, imgUrl, id, onPlus, onAddToFavorite }) => {
   const [isAdded, setIsAdded] = useState(false);
   const [isFavorite, setIsFavorite] = useState(false);

   const onClickPlus = () => {
      onPlus({ name, price, imgUrl, id });
      setIsAdded(!isAdded);
   };

   const onClickFavorite = () => {
      onAddToFavorite({ name, price, imgUrl, id });
      setIsFavorite(!isFavorite);
   };

   return (
      <div className={styles.card}>
         <div className={styles.favorite}>
            <img
               onClick={onClickFavorite}
               src={
                  isFavorite ? "/img/hear-liked.svg" : "/img/heart-unliked.svg"
               }
               alt="Unlike"
            />
         </div>
         <img className="mb-15" width={133} height={112} src={imgUrl} alt="" />
         <h5 className="mb-15">{name}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>{price} руб.</b>
            </div>
            <img
               className={styles.plus}
               onClick={onClickPlus}
               src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
               alt="add to cart"
            />
         </div>
      </div>
   );
};

export default Card;
