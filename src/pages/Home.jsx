import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import './Home.css'
const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Book Library</h1>
      
     
      <Link to="/add-book">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Book
        </button>
      </Link>

     
      <div className="mt-6 grid grid-cols-3 gap-4">
        <BookCard title="1984" author="George Orwell" description="Dystopian novel." />
        <BookCard title="The Alchemist" author="Paulo Coelho" description="Philosophical story." />
      </div>
    </div>
  );
};

export default Home;
