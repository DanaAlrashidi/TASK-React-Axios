import { Link, NavLink, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import instance from "./api.js";

function App() {
  const response = useQuery({
    queryKey: ["test"],
    queryFn: () =>
      instance.get("https://coded-pets-api-crud.eapi.joincoded.com/pets	"),
  });
  console.log(response?.data?.data);
  return (
    <div className="font-mono">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
