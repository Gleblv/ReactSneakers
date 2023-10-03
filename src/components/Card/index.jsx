import styles from "./Card.module.scss";

const Card = ({ name, price, imgUrl, onClickPlus }) => {
   return (
      <div className={styles.card}>
         <div className={styles.favorite}>
            <img src="/img/heart-unliked.svg" alt="Unlike" />
         </div>
         <img className="mb-15" width={133} height={112} src={imgUrl} alt="" />
         <h5 className="mb-15">{name}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>{price} руб.</b>
            </div>
            <button onClick={onClickPlus}>
               <img src="/img/btn-plus.svg" alt="add to cart" />
            </button>
         </div>
      </div>
   );
};

export default Card;
