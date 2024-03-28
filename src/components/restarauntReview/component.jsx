const RestaurantReview = ({ reviews }) => {
  if (!reviews) {
    return null;
  }
  return (
    <ul>
      {reviews.map((reviews) => (
        <li>{reviews.text}</li>
      ))}
    </ul>
  );
};

export default RestaurantReview;
