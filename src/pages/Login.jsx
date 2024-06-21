import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useLogin } from "../hooks/useLogin";
import { auth } from "../firebase/firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import FormInput from "../components/FormInput";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // redirect to home page after successful login
    } catch (error) {
      setError("Failed to login. Please check your email and password.");
    }
  };
  const { signUpWithGoogle } = useLogin();
  return (
    <div className="min-h-screen grid place-items-center p-4">
      <div className="w-96 p-6 border border-gray-500 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <FormInput
              type="email"
              value={email}
              labelText="Email:"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          <FormInput
            type="password"
            value={password}
            labelText="Password:"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <div className="mt-6">
          <button className="btn btn-secondary btn-block">Register</button>
        </div>
        <p className="text-center mt-2 decoration decoration-dashed text-lg">
          OR
        </p>
        <button
          type="button"
          onClick={signUpWithGoogle}
          className="btn btn-block mt-2"
        >
          <FcGoogle className="w-5 h-5" />
          Continue with Google
        </button>
        </form>
        <p className="text-center mt-7">
          Don't have ant account ? <Link to="/register" className="hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
