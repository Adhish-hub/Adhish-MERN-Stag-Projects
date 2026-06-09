import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="mb-4 text-5xl font-bold">Welcome to Foodie Restaurant</h1>

      <p className="mb-6 text-lg text-zinc-300">
        Search and explore delicious dishes from our menu.
      </p>

      <Link to="/menu">
        <button className="rounded-lg bg-orange-500 px-6 py-3 font-bold text-black hover:bg-orange-400">
          View Menu
        </button>
      </Link>
    </div>
  );
};

export default Home;
