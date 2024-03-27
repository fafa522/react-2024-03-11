import Tab from '../tab/component';

const RestaurantTab = ({ restaurants, onTabClick, currentIndex }) => {
  return (
    <div>
      {restaurants.map((restaurants, index) => (
        <Tab
          title={restaurants.name}
          isActive={index === currentIndex}
          onClick={() => onTabClick(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantTab;
