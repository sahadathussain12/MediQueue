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

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegester = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data, "data");
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gray-50 px-4 py-10 dark:bg-gray-950">
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create Your Account
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Join MediQueue and start your learning journey.
          </p>
        </div>

        {/* Register Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <Form
            onSubmit={handleRegester}
            className="flex w-full flex-col gap-5"
          >
            {/* Name */}
            <TextField name="name" className="w-full">
              <Label>Name</Label>

              <Input
                type="text"
                placeholder="Enter your name"
              />

              <FieldError />
            </TextField>

            {/* Email */}
            <TextField name="email" className="w-full">
              <Label>Email</Label>

              <Input
                type="email"
                placeholder="john@example.com"
              />

              <FieldError />
            </TextField>

            {/* Photo URL */}
            <TextField name="imageUrl" className="w-full">
              <Label>Photo URL</Label>

              <Input
                type="url"
                placeholder="Enter your photo URL"
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={6}
              name="password"
              type={showPassword ? "text" : "password"}
              className="w-full"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[a-z]/.test(value)) {
                  return "Password must contain at least one lowercase letter";
                }

                return null;
              }}
            >
              <Label>Password</Label>

              <div className="relative flex w-full items-center">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pr-10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="absolute right-3 text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>

              <Description>
                Minimum 6 characters with uppercase and lowercase letters.
              </Description>

              <FieldError />
            </TextField>

            {/* Create Account */}
            <Button
              type="submit"
              variant="primary"
              className="mt-2 h-11 w-full bg-blue-600 font-semibold text-white hover:bg-blue-700"
            >
              Create Account
            </Button>
          </Form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />

            <span className="text-xs font-medium text-gray-500">
              OR
            </span>

            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          </div>

          {/* Google Button */}
          <Button
            type="button"
            variant="secondary"
            className="h-11 w-full font-semibold"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </Button>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;

