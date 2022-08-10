import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>
        Select the Doggo
      </h1>
        <button
          className="btn"
          onClick={() => {window.pdp.product.setProduct('Dog 1', 'https://images.dog.ceo/breeds/puggle/IMG_071023.jpg')}}
        >
          Doggo 1
        </button>
        <button
          className="btn"
          onClick={() => {window.pdp.product.setProduct('Dog 2', 'https://images.dog.ceo/breeds/basenji/n02110806_1826.jpg')}}
        >
          Doggo 2
        </button>
        <button
          className="btn"
          onClick={() => {window.pdp.product.setProduct('Dog 3', 'https://images.dog.ceo/breeds/labradoodle/Cali.jpeg')}}
        >
          Doggo 3
        </button>
        <button
          className="btn"
          onClick={() => {window.pdp.product.setProduct('Dog 4', 'https://images.dog.ceo/breeds/terrier-westhighland/n02098286_4011.jpg')}}
        >
          Doggo 4
        </button>
        <button
          className="btn"
          onClick={() => {window.pdp.product.setProduct('Dog 5', 'https://images.dog.ceo/breeds/affenpinscher/n02110627_5186.jpg')}}
        >
          Doggo 5
        </button>
      <h1>
        Adopt the Doggo
      </h1>
      <div>
        <button
          className="btn"
          onClick={() => {window.pdp.cart.addToCart()}}
        >
          Adopt It!
        </button>
      </div>
    </div>
  );
}

export default App;
