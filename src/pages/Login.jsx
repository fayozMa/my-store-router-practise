import { useEffect } from "react";
import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";
import { useSignIn } from "../hooks/useSignIn";
import { Form, useActionData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
function Login() {
  const { signUpWithGoogle } = useLogin();
  return (
    <div className="min-h-screen grid place-items-center">
      <Form
        method="post"
        className="w-96 p-6 border border-gray-500 rounded-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-4">Welcome Back!</h1>
        <FormInput type="email" labelText="Email:" name="email" />
        <FormInput type="password" labelText="Password:" name="password" />
        <div className="mt-6">
          <button className="btn btn-secondary btn-block">Login</button>
        </div>
        <p className="text-center mt-2 decoration decoration-dashed text-lg">
          OR
        </p>
        <button
          type="button"
          onClick={signUpWithGoogle}
          className="btn  btn-block mt-2"
        >
          <FcGoogle className="w-5 h-5" />
          Continue with Google
        </button>
        <p className="text-center mt-7">
          Don't have any account? <Link to="/register" className="hover:underline ">Sign In</Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;
