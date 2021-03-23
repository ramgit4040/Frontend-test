import React,{useState} from "react";

import "./App.css";

import Autocomplete from "./Autocomplete";
import ProductDetail from "./ProductDetail";

function App() {
  const [selectedProdId,setSelectedProdId] = useState('');

  const handleProductId = (prodId) => {
    setSelectedProdId(prodId)
  }

  return (
    <div className="App">
      <Autocomplete getProductId = {handleProductId}/>
      <ProductDetail productId={selectedProdId} />
    </div>
  );
}

export default App;
