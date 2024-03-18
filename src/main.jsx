import React from 'react';
import ReactDOM from 'react-dom/client';
import { restaurants } from './materials/mock';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <h1>{restaurants[0].name}</h1>
    <h3>Menu</h3>
    <ul id={restaurants[0].menu[0].id}>
      <li>name: {restaurants[0].menu[0].name}</li>
      <li>price: {restaurants[0].menu[0].price}$</li>
      <li>ingredients: {restaurants[0].menu[0].ingredients.join(', ')}</li>
    </ul>
    <ul id={restaurants[0].menu[1].id}>
      <li>name: {restaurants[0].menu[1].name}</li>
      <li>price: {restaurants[0].menu[1].price}$</li>
      <li>ingredients: {restaurants[0].menu[1].ingredients.join(', ')}</li>
    </ul>
    <ul id={restaurants[0].menu[2].id}>
      <li>name: {restaurants[0].menu[2].name}</li>
      <li>price: {restaurants[0].menu[2].price}$</li>
      <li>ingredients: {restaurants[0].menu[2].ingredients.join(', ')}</li>
    </ul>
    <h3>Reviews</h3>
    <ul id={restaurants[0].reviews[0].id}>
      <li>user: {restaurants[0].reviews[0].user}</li>
      <li>text: {restaurants[0].reviews[0].text}</li>
      <li>rating: {restaurants[0].reviews[0].rating}</li>
    </ul>
    <ul id={restaurants[0].reviews[1].id}>
      <li>user: {restaurants[0].reviews[1].user}</li>
      <li>text: {restaurants[0].reviews[1].text}</li>
      <li>rating: {restaurants[0].reviews[1].rating}</li>
    </ul>
    <h1>{restaurants[1].name}</h1>
    <h3>Menu</h3>
    <ul id={restaurants[1].menu[0].id}>
      <li>name: {restaurants[1].menu[0].name}</li>
      <li>price: {restaurants[1].menu[0].price}$</li>
      <li>ingredients: {restaurants[1].menu[0].ingredients.join(', ')}</li>
    </ul>
    <ul id={restaurants[1].menu[1].id}>
      <li>name: {restaurants[1].menu[1].name}</li>
      <li>price: {restaurants[1].menu[1].price}$</li>
      <li>ingredients: {restaurants[0].menu[1].ingredients.join(', ')}</li>
    </ul>
    <h3>Reviews</h3>
    <ul id={restaurants[1].reviews[0].id}>
      <li>user: {restaurants[1].reviews[0].user}</li>
      <li>text: {restaurants[1].reviews[0].text}</li>
      <li>rating: {restaurants[1].reviews[0].rating}</li>
    </ul>
    <ul id={restaurants[1].reviews[1].id}>
      <li>user: {restaurants[1].reviews[1].user}</li>
      <li>text: {restaurants[1].reviews[1].text}</li>
      <li>rating: {restaurants[1].reviews[1].rating}</li>
    </ul>
    <ul id={restaurants[1].reviews[2].id}>
      <li>user: {restaurants[1].reviews[2].user}</li>
      <li>text: {restaurants[1].reviews[2].text}</li>
      <li>rating: {restaurants[1].reviews[2].rating}</li>
    </ul>
    <h1>{restaurants[2].name}</h1>
    <h3>Menu</h3>
    <ul id={restaurants[2].menu[0].id}>
      <li>name: {restaurants[2].menu[0].name}</li>
      <li>price: {restaurants[2].menu[0].price}$</li>
      <li>ingredients: {restaurants[2].menu[0].ingredients.join(', ')}</li>
    </ul>
    <ul id={restaurants[2].menu[1].id}>
      <li>name: {restaurants[2].menu[1].name}</li>
      <li>price: {restaurants[2].menu[1].price}$</li>
      <li>ingredients: {restaurants[2].menu[1].ingredients.join(', ')}</li>
    </ul>
    <ul id={restaurants[2].menu[2].id}>
      <li>name: {restaurants[2].menu[2].name}</li>
      <li>price: {restaurants[2].menu[2].price}$</li>
      <li>ingredients: {restaurants[0].menu[2].ingredients.join(', ')}</li>
    </ul>
    <h3>Reviews</h3>
    <ul id={restaurants[2].reviews[0].id}>
      <li>user: {restaurants[2].reviews[0].user}</li>
      <li>text: {restaurants[2].reviews[0].text}</li>
      <li>rating: {restaurants[2].reviews[0].rating}</li>
    </ul>
    <h1>{restaurants[3].name}</h1>
    <h3>Menu</h3>
    <ul id={restaurants[3].menu[0].id}>
      <li>name: {restaurants[3].menu[0].name}</li>
      <li>price: {restaurants[3].menu[0].price}$</li>
      <li>ingredients: {restaurants[0].menu[0].ingredients.join(', ')}</li>
    </ul>
    <ul id={restaurants[3].menu[1].id}>
      <li>name: {restaurants[3].menu[1].name}</li>
      <li>price: {restaurants[3].menu[1].price}$</li>
      <li>ingredients: {restaurants[3].menu[1].ingredients.join(', ')}</li>
    </ul>
    <h3>Reviews</h3>
    <ul id={restaurants[3].reviews[0].id}>
      <li>user: {restaurants[3].reviews[0].user}</li>
      <li>text: {restaurants[3].reviews[0].text}</li>
      <li>rating: {restaurants[3].reviews[0].rating}</li>
    </ul>
    <ul id={restaurants[3].reviews[1].id}>
      <li>user: {restaurants[3].reviews[1].user}</li>
      <li>text: {restaurants[3].reviews[1].text}</li>
      <li>rating: {restaurants[3].reviews[1].rating}</li>
    </ul>
  </>
);
