import './App.css';

import { useState } from "react";
import ListProduct from './component/ListProduct';
import ProductItem from "./component/ProductItem";
import Navigasi from './component/Navigasi';



function App() {

  const [ambilProduct] = useState(["Intip", "Dawet", "Mie"])

  return (
    <div className="App">

      <Navigasi />

      <ListProduct />

      {/* <ProductItem /> */}

      {ambilProduct.map((item, index) => (
          <ProductItem ambilProduct={item} key={index} />
      ))} 

      <footer>
        <span>by Harcen Gaming</span>
      </footer>

    </div>
  );
}

export default App;
