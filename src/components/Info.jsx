import React from "react";

import appStore from "../context";

const Info = ({ title, description, image }) => {
   const { setCartIsOpened } = React.useContext(appStore);

   return (
      <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
         <img className='mb-20' width='120px' src={image} alt='Empty' />
         <h2>{title}</h2>
         <p className='opacity-6'>{description}</p>
         <button onClick={() => setCartIsOpened(false)} className='greenButton'>
            Вернуться назад
         </button>
      </div>
   );
};

export default Info;
