const Card = () => {
   return (
      <div className="card mr-30">
         <div className="favorite">
            <img src="/img/heart-unliked.svg" alt="Unlike" />
         </div>
         <img
            className="mb-15"
            width={133}
            height={112}
            src="/img/sneaker-image-1.jpg"
            alt=""
         />
         <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>12 999 руб.</b>
            </div>
            <button>
               <img src="/img/btn-plus.svg" alt="add to cart" />
            </button>
         </div>
      </div>
   );
};

export default Card;
