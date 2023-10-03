/* eslint-disable jsx-a11y/alt-text */
import CartSidebar from "./components/CartSidebar";
import Header from "./components/Header";
import Card from "./components/Card";

const arr = [
   {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      imgUrl: "/img/sneaker-image-1.jpg",
   },
   {
      name: "Мужские Кроссовки Nike Air Max 270",
      price: 15600,
      imgUrl: "/img/sneaker-image-1.jpg",
   },
   {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8900,
      imgUrl: "/img/sneaker-image-1.jpg",
   },
];

function App() {
   return (
      <div className="wrapper clear">
         <CartSidebar />

         <Header />
         <div className="content p-40 clear">
            <div className="mb-40 d-flex align-center justify-between">
               <h1>Все кроссовки</h1>
               <div className="search-block d-flex align-center">
                  <img src="/img/search.svg" alt="serch-svg" />
                  <input placeholder="Поиск..." />
               </div>
            </div>
            <div className="d-flex">
               {arr.map(({ name, price, imgUrl }) => (
                  <Card
                     name={name}
                     price={price}
                     imgUrl={imgUrl}
                     onClickPlus={() => console.log("1")}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
