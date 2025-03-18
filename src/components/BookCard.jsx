import "./BookCard.css"; 

const BookCard = ({ title, author, description, coverImage }) => {
  return (
    <div className="book-card">
      <img src={coverImage} alt={title} className="book-cover" />
      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">by {author}</p>
        <p className="book-description">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
