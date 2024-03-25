import React from 'react';
import ReactDOM from 'react-dom/client';
import { restaurants } from './materials/mock';
import Restaurant from './components/restaurant/component';
import { Layout } from './components/layout/component';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Layout>
    <div>
      {restaurants.map((restaurants) => (
        <Restaurant restaurants={restaurants} />
      ))}
    </div>
  </Layout>
);
