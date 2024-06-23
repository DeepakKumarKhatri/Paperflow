"use client";

import CourseCard from "@/components/CourseCard";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const userSession = sessionStorage.getItem("user");
    if (!userSession && !user) {
      redirect("/");
    }
  }, [user, router]);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-0">
          YOUR COURSES
        </h1>
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by Course Code or Name"
            className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-gray-400"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
        </div>
      </div>
      <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 10 }, (_, index) => (
          <CourseCard
            key={index}
            courseName="TICS-II"
            courseCode="CSC-901"
            creditHours="3"
            contentSize="134"
          />
        ))}
      </div>
    </>
  );
};

export default Page;
