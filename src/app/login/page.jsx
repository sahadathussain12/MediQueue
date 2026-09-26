"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-clien";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(FormData, "Formtdata");
    const user = Object.fromEntries(formData.entries());
    console.log(user, "user");

    const { data, error } = await authClient.signIn.email({
      email: user?.email,

      password: user?.password,
    });

    console.log(data, "data", error);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Sign In successful!");
    redirect("/");
  };

  const handleGoogleSignIn= async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    console.log("Google data:", data);
    console.log("Google error:", error);

    if (error) {
      toast.error(error.message || "Google sign up failed");
    }
    toast.success("Google sign up Successful");
  };
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gray-50 px-4 py-10 dark:bg-gray-950">
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Log in to your MediQueue account to continue.
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <Form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
            {/* Email */}
            <TextField name="email" className="w-full">
              <Label>Email</Label>

              <Input type="email" placeholder="john@example.com" />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              name="password"
              type={showPassword ? "text" : "password"}
              className="w-full"
            >
              <Label>Password</Label>

              <div className="relative flex items-center w-full">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pr-10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>

              <Description>Enter your MediQueue account password.</Description>

              <FieldError />
            </TextField>

            {/* Login Button */}
            <Button
              type="submit"
              variant="primary"
              className="mt-2 h-11 w-full bg-blue-600 font-semibold text-white hover:bg-blue-700"
            >
              Login
            </Button>
          </Form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />

            <span className="text-xs font-medium text-gray-500">OR</span>

            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          </div>

          {/* Google Button */}
          <Button
          onClick={handleGoogleSignIn}
            type="button"
            variant="secondary"
            className="h-11 w-full font-semibold"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </Button>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
