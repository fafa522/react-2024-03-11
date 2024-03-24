const RestaurantMenu = ({ menu }) => {
  if (!menu) {
    return null;
  }
  const { name } = menu;
  return (
    <ul>
      <li>{name}</li>
    </ul>
  );
};

export default RestaurantMenu;
