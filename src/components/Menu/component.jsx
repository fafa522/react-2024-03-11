import { useState } from 'react';
import Counter from '../counter/counter';

const Menu = ({ dishes }) => {
  if (!dishes) {
    return null;
  }

  return (
    <ul>
      {dishes.map((dish) => (
        <li>
          {dish.name}
          <Counter />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
