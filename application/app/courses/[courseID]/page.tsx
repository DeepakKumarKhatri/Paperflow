import { BreadcrumbWithDropdown } from "@/components/BreadCrumb";
import { DocumentCard } from "@/components/DocumentCard";
import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div className="pt-4">
      <BreadcrumbWithDropdown />
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
  );
};

export default Page;
