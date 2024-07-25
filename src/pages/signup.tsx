import React, { useState } from "react";
import { useRouter } from "next/router";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebaseConfig"; // Updated import
import { FcGoogle } from "react-icons/fc";

const SignUpPage: React.FC = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/profile");
    } catch (err: any) {
      setError(
        err.message || "Failed to sign up with Google. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email address
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="We are sorry, login with email is unavailable at the moment"
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Create password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Please use your Google account to sign up"
              disabled
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Sign up with Google for a seamless experience"
              disabled
            />
          </div>
          {error && <p className="text-red text-xs italic mb-4">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center w-full"
            >
              <FcGoogle className="mr-2" />
              Sign up with Google
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="text-purple-600 hover:text-purple-700 font-bold"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
