import React from "react";

import appStore from "../context";

import Card from "../components/Card";

const Orders = () => {
   const { orderItems } = React.useContext(appStore);

   return (
      <>
         <div className='content p-40'>
            <div className='d-flex align-center justify-between mb-40'>
               <h1>Мои заказы</h1>
            </div>

            <div className='d-flex flex-wrap'>
               {orderItems.map((item, index) => (
                  <Card key={index} {...item} />
               ))}
            </div>
         </div>
      </>
   );
};

export default Orders;
