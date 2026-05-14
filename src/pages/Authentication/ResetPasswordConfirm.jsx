import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ResetPasswordConfirm() {
  const { uid, token } = useParams();

  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== reNewPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        "https://green-harvest-backend-seven.vercel.app/api/auth/users/reset_password_confirm/",
        {
          uid,
          token,
          new_password: newPassword,
        },
      );

      toast.success("Password reset successful");

      navigate("/signin");
    } catch (error) {
      console.log(error);
      toast("Invalid or expired token");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-3 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={reNewPassword}
            onChange={(e) => setReNewPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white py-3 rounded-lg transition"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
