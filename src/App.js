import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import HelloComponent from "./components/HelloComponent";
import ProductCard from "./features/product/ProductCard";
import data from "./products.json";
import ProductList from "./features/product/ProductList";
import { Component } from "react";

function App() {
  return (
    <div>
      {/* <ClickCounter />
      <HoverCounter />
      <HelloComponent /> */}

      {/* <ProductCard data={data.products} /> */}
      <ProductList data={data.products} />
    </div>
  );
}

export default App;
