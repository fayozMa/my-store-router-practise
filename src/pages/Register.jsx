import { useEffect } from "react";
import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";
import { useRegister } from "../hooks/useRegister.jsx";
import { Form, useActionData, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let email = formData.get("email");
  let password = formData.get("password");
  let photoURL = formData.get("photoURL");

  return { displayName, email, password, photoURL };
};
function Register() {
  const data = useActionData();
  const { registerWithEmailAndPassword } = useRegister();
  useEffect(() => {
    if (data) {
      registerWithEmailAndPassword(data);
    }
  }, [data]);

  const { signUpWithGoogle } = useLogin();
  return (
    <div className="min-h-screen grid place-items-center p-4">
      <Form
        method="post"
        className="w-96 p-6 border border-gray-500 rounded-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-4">Create Account</h1>
        <FormInput type="text" labelText="Display Name:" name="displayName" />
        <FormInput type="email" labelText="Email:" name="email" />
        <FormInput type="url" labelText="Photo URL:" name="photoURL" />
        <FormInput type="password" labelText="Password:" name="password" />
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
        <p className="text-center mt-7">
          Already have account? <Link to="/login" className="hover:underline">Log in</Link>
        </p>
      </Form>
    </div>
  );
}

export default Register;
