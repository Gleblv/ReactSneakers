/* eslint-disable jsx-a11y/alt-text */
import CartSidebar from "./components/CartSidebar";
import Header from "./components/Header";
import Card from "./components/Card";

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
               <Card />
               <Card />
               <Card />
               <Card />
            </div>
         </div>
      </div>
   );
}

export default App;
