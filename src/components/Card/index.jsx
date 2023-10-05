import { useState } from "react";

import styles from "./Card.module.scss";

const Card = ({ name, price, imgUrl, onClickFavorite, onPlus }) => {
   const [isAdded, setIsAdded] = useState(false);

   const onClickPlus = () => {
      onPlus({ name, price, imgUrl });
      setIsAdded(!isAdded);
   };

   return (
      <div className={styles.card}>
         <div className={styles.favorite} onClick={onClickFavorite}>
            <img src="/img/heart-unliked.svg" alt="Unlike" />
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
