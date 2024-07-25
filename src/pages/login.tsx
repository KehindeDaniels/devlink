import React, { useState } from "react";
import { useRouter } from "next/router";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebaseConfig"; // Updated import
import { FcGoogle } from "react-icons/fc";

const LoginPage: React.FC = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/profile");
    } catch (err: any) {
      setError(
        err.message || "Failed to log in with Google. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
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
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Please use your Google account to log in"
              disabled
            />
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center w-full"
            >
              <FcGoogle className="mr-2" />
              Log in with Google
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p>
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-purple-600 hover:text-purple-700 font-bold"
            >
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
