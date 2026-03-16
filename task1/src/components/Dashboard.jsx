import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl">Dashboard</h1>
      <button onClick={logout} className="bg-blue-500 rounded-md p-2 text-white mt-4"  >Logout</button>
    </div>
  );
}