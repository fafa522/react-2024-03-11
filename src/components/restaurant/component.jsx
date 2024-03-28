import Menu from '../Menu/component';
import RestaurantReview from '../restarauntReview/component';

const Restaurant = ({ restaurants }) => {
  return (
    <div>
      <h1>{restaurants.name}</h1>
      <h3>Menu</h3>
      <Menu dishes={restaurants.menu} />
      <h3>Review</h3>
      <RestaurantReview reviews={restaurants.reviews} />
    </div>
  );
};

export default Restaurant;
