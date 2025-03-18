const BookCard = ({ title, author, description }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">by {author}</p>
      <p className="text-gray-800 mt-2">{description}</p>
    </div>
  );
};

export default BookCard;
