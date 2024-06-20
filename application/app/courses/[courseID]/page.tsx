"use client";

import { BreadcrumbWithDropdown } from "@/components/BreadCrumb";
import { DocumentCard } from "@/components/DocumentCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Page = () => {
  const current_path = usePathname();

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 gap-6">
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Document or Instructor Name"
            className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-gray-400"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
        </div>
        <Link
          href={{
            pathname: "/new_doc",
            query: {
              course: current_path.split("/")[2],
              comingFrom: current_path.split("/")[3],
              document: current_path.split("/")[4],
            },
          }}
        >
          <Button>Do you have one?</Button>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
        <BreadcrumbWithDropdown />
      </div>
      <div className="pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="mt-2 pt-2 pb-4 border-2 border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <h1 className="text-center text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Available Assignments
            </h1>
            <div className="space-y-4">
              {Array.from({ length: 5 }, (_, index) => (
                <DocumentCard
                  key={index}
                  documentName="Assignment 4"
                  instructorName="Mam Zahid"
                  semester="Spring 2024"
                  uploadDate="12-NOV-2023"
                  solutionsCount="34"
                />
              ))}
            </div>
          </div>
          <div className="mt-2 pt-2 border-2 border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <h1 className="text-center text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Available Quizzes
            </h1>
            <div className="space-y-4">
              {Array.from({ length: 5 }, (_, index) => (
                <DocumentCard
                  key={index}
                  documentName="Quiz 4"
                  instructorName="Sir Inayat"
                  semester="Spring 2024"
                  uploadDate="12-NOV-2023"
                  solutionsCount="34"
                />
              ))}
            </div>
          </div>
          <div className="mt-2 pt-2 border-2 border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <h1 className="text-center text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Available Past-Papers
            </h1>
            <div className="space-y-4">
              {Array.from({ length: 5 }, (_, index) => (
                <DocumentCard
                  key={index}
                  documentName="Spring 2024 TerminalPaper"
                  instructorName="Mam Zahid"
                  semester="Spring 2024"
                  uploadDate="12-NOV-2023"
                  solutionsCount="34"
                />
              ))}
            </div>
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
