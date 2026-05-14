import { useContext, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../routes/provider/AuthProvider";

export default function SignIn() {
  const { loginUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await loginUser(email, password);
    if (success) {
      navigate("/"); // or "/"
    }
  };

  return (
    <div className="md:min-h-screen flex items-center justify-center bg-gray-50 px-4 py-4 md:py-0">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-green-600" />
              Remember me
            </label>

            <Link
              to="/forgotPassword"
              className="text-gray-500 hover:text-green-600"
            >
              Forgot Password
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white py-3 rounded-full font-semibold transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?
          <Link
            to="/register"
            className="text-green-600 font-semibold ml-1 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
