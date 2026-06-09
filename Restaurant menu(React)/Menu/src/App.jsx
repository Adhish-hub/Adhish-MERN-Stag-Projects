import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MealDetails from "./pages/MealDetails";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="flex items-center justify-between bg-orange-500 px-8 py-4 text-black">
        <h2 className="text-2xl font-bold">Foodie Restaurant</h2>

        <div className="flex gap-6 font-bold">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/meal/:id" element={<MealDetails />} />
      </Routes>
    </div>
  );
};

export default App;
