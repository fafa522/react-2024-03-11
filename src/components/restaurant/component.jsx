import RestaurantName from '../restarauntName/component';
import RestaurantMenu from '../restarauntMenu/component';
import RestaurantReview from '../restarauntReview/component';

const Restaurant = ({ restaurants }) => {
  return (
    <div>
      <RestaurantName restaurants={restaurants} />
      <h3>
        Menu
        {restaurants.menu.map((menu) => (
          <RestaurantMenu menu={menu} />
        ))}
      </h3>
      <h3>
        Review
        {restaurants.reviews.map((reviews) => (
          <RestaurantReview reviews={reviews} />
        ))}
      </h3>
    </div>
  );
};

export default Restaurant;
