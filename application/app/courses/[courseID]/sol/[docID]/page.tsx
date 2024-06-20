import { BreadcrumbWithDropdown } from "@/components/BreadCrumb";
import { SolutionCard } from "@/components/SolutionCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
        <BreadcrumbWithDropdown />
        <div className="relative w-full sm:w-auto mt-2 sm:mt-0">
          <input
            type="text"
            placeholder="Document/Instructor/Contributor Name"
            className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-gray-400"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
        </div>
      </div>
      <div className="pt-4">
        <div className="mt-2 pt-2 pb-4 border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <h1 className="pl-4 text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Available Solutions for ......
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 5 }, (_, index) => (
              <SolutionCard
                key={index}
                documentName="Assignment 4 Solution"
                instructorName="Mam Zahid"
                semester="Spring 2024"
                uploadDate="12-NOV-2023"
              />
            ))}
          </div>
        </div>
        <div className="p-4 flex justify-center">
          <Button variant="destructive">Load More</Button>
        </div>
      </div>
    </>
  );
};

export default Page;
