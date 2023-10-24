import Card from "../components/Card";

const Home = ({
   sneakersItems,
   filterValue,
   cartItems,
   onChangeFilterValue,
   setFilterValue,
   onAddToCart,
   onAddToFavorite,
   isLoading,
}) => {
   const renderItems = () => {
      const filtredItems = sneakersItems.filter((item) =>
         item.name.toLowerCase().includes(filterValue.toLowerCase())
      );

      return (isLoading ? [...Array(7)] : filtredItems).map((item, index) => (
         <Card
            key={index}
            {...item}
            onPlus={(itemData) => onAddToCart(itemData)}
            onAddToFavorite={(itemData) => onAddToFavorite(itemData)}
            added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
            loading={isLoading}
         />
      ));
   };

   return (
      <div className='content p-40 clear'>
         <div className='mb-40 d-flex align-center justify-between'>
            <h1>{filterValue ? `Поиск по запросу: "${filterValue}"` : "Все кроссовки"}</h1>
            <div className='search-block d-flex align-center'>
               <img src='/img/search.svg' alt='serch-svg' />
               <input placeholder='Поиск...' onChange={onChangeFilterValue} value={filterValue} />
               {filterValue && (
                  <img
                     className='removeFilterBtn'
                     src='img/btn-remove.svg'
                     alt='remove'
                     onClick={() => setFilterValue("")}
                  />
               )}
            </div>
         </div>
         <div className='d-flex flex-wrap'>{renderItems()}</div>
      </div>
   );
};

export default Home;
