import { useState } from "react";
import { useNavigate } from "react-router-dom";

 export const loginUser = (email, password) => {
  if (email === "admin@test.com" && password === "123456") {
    return {
      token: "abc123token",
      user: { email }
    };
  }

  return null;
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = loginUser(email, password);

      localStorage.setItem("token", res.token);

      navigate("/dashboard");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "300px", margin: "100px auto" }}>
      <h2 className="mb-2">Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="border border-1"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
            className="border border-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit" className="btn bg-blue-500 text-white p-3 rounded-md cursor-pointer">
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
<p className="mt-2">Add email as <span className="text-red-500">admin@test.com</span> and password as <span className="text-red-500">123456</span></p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}