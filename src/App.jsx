import { restaurants } from './materials/mock';
import Restaurant from './components/restaurant/component';
import { Layout } from './components/layout/component';
import { useState, useEffect } from 'react';
import RestaurantTab from './components/restaurant-tabs/component';

const getSavedRestaurantIndex = () =>
  Number(localStorage.getItem('currentRestaurantIndex'));

const App = () => {
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(
    getSavedRestaurantIndex
  );

  useEffect(() => {
    localStorage.setItem('currentRestaurantIndex', currentRestaurantIndex);
  }, [currentRestaurantIndex]);

  return (
    <Layout>
      <RestaurantTab
        restaurants={restaurants}
        onTabClick={setCurrentRestaurantIndex}
        currentIndex={currentRestaurantIndex}
      />
      <Restaurant restaurants={restaurants[currentRestaurantIndex]} />
    </Layout>
  );
};

export default App;
