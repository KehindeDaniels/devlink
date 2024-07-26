import React, { useState } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebaseConfig";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc"; // Import Google icon

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (err: any) {
      setError(
        err.message || "Failed to sign in with Google. Please try again."
      );
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err: any) {
      setError(
        err.message || "Failed to log in. Please check your email and password."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="e.g. yourname@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 flex items-center justify-between">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-600 font-bold">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
        <div className="mt-4">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center w-full hover:bg-gray-100"
          >
            <FcGoogle className="mr-2" size={24} /> Login with Google
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-black">
            Don&apos;t have an account?{" "}
            <Link href="/signup">
              <span className="text-purple-600 hover:text-purple-700 font-bold cursor-pointer">
                Create account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
