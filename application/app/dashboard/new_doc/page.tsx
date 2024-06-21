"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { years } from "@/lib/years";
import { BreadcrumbWithDropdown } from "@/components/BreadCrumb";

const documentTypes = [
  "Assignment Solution",
  "Quiz Solution",
  "Past Paper Solution",
];

const Page = () => {
  const searchParams = useSearchParams();
  // console.log(searchParams.get("comingFrom"));

  const [selectedSemester, setSelectedSemester] = useState<string>("");
  const [selectedDocumentType, setSelectedDocumentType] = useState<string>("");
  const [instructor, setInstructor] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({
    //   selectedSemester,
    //   selectedDocumentType,
    //   instructor,
    //   file,
    // });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
        <BreadcrumbWithDropdown />
      </div>
      <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="w-11/12 md:w-2/3 lg:w-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
            Contribute Your Collection Here 👇
          </h2>
          <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
            <strong>Note: </strong>After careful checking our admin will approve
            your contribution. We can't guarantee about every upload.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center">
              <label htmlFor="semester" className="sr-only">
                Current Semester
              </label>
              <select
                id="semester"
                className="w-4/5 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-gray-400"
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Current Semester
                </option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col items-center">
              <label htmlFor="documentType" className="sr-only">
                Document Type
              </label>
              <select
                id="documentType"
                className="w-4/5 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-gray-400"
                value={selectedDocumentType}
                onChange={(e) => setSelectedDocumentType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Document Type
                </option>
                {documentTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col items-center">
              <label htmlFor="instructor" className="sr-only">
                Instructor
              </label>
              <input
                type="text"
                id="instructor"
                placeholder="Instructor Name"
                className="w-4/5 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-gray-400"
                value={instructor}
                onChange={(e) => setInstructor(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col items-center">
              <label htmlFor="file" className="sr-only">
                Upload File
              </label>
              <input
                type="file"
                id="file"
                className="w-4/5 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:border-gray-400"
                onChange={handleFileChange}
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-4/5 p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
