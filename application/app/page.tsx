"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { HiEye, HiEyeOff } from "react-icons/hi";
import "./globals.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export const iframeHeight = "800px";

export const containerClassName =
  "w-full h-full p-4 lg:p-0 bg-gradient-to-br from-gray-100 to-gray-200";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(email, password);
      sessionStorage.setItem("user", true);
      console.log({ response });
      if (response) {
        router.push("/dashboard/courses");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="hidden lg:flex lg:flex-1 items-center justify-center">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/extras/collaborationlogin.jpg"
            alt="Paperflow Background"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center py-12 lg:py-0">
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-300 rounded-lg shadow-md transform"></div>
          <div className="relative z-10 ">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold text-gray-800 leading-tight mt-10">
                Welcome to Paperflow
              </h1>
              <p className="text-gray-600">
                Access all your course resources conveniently.
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="deepak@gmail.com"
                  required
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto text-sm underline text-blue-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                onClick={handleSignIn}
              >
                Login
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                <FcGoogle className="h-5 w-5" />
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline text-blue-500">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
