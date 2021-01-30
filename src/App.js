import React from "react";
import Product from "./Components/Product";
import "./data.js";
import data from "./data.js";

function App(props) {
  return (
    <div classNameName="App">
      <div className="grid-template">
        <header className="row">
          <div>
            <a className="brand" href="/">
              MSH
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <div>
            <div className="row center">
              {data.products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
              ;
            </div>
          </div>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </div>
  );
}

export default App;
