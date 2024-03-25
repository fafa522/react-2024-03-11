const RestaurantName = ({ restaurants }) => {
  if (!restaurants) {
    return null;
  }
  const { name } = restaurants;
  return <h1>{name}</h1>;
};

export default RestaurantName;
