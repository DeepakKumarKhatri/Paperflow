"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HiEye, HiEyeOff } from "react-icons/hi";

import "../globals.css";

export const iframeHeight = "600px";

export const containerClassName =
  "w-full h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-100 to-gray-200";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={containerClassName}>
      <Card className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md">
        <CardHeader className="text-center bg-gradient-to-br from-blue-200 to-purple-300 rounded-t-lg shadow-md">
          <CardTitle className="text-xl font-bold text-gray-800">
            Sign Up
          </CardTitle>
          <CardDescription className="text-gray-600">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name" className="text-gray-700">
                  First name
                </Label>
                <Input
                  id="first-name"
                  placeholder="Max"
                  required
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name" className="text-gray-700">
                  Last name
                </Label>
                <Input
                  id="last-name"
                  placeholder="Robinson"
                  required
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <HiEyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <HiEye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Create an account
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              <FcGoogle className="h-5 w-5" />
              Sign up with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/" className="underline text-blue-500">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
