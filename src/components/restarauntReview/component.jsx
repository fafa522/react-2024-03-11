const RestaurantReview = ({ reviews }) => {
  if (!reviews) {
    return null;
  }
  const { user, text } = reviews;
  return (
    <ul>
      {user}:<li>{text}</li>
    </ul>
  );
};

export default RestaurantReview;
