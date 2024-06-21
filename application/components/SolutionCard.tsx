"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";

export function SolutionCard({
  documentName,
  instructorName,
  semester,
  uploadDate,
}: {
  documentName: string;
  instructorName: string;
  semester: string;
  uploadDate: string;
}) {
  const router = useRouter();
  const currentPath = usePathname();

  const constructUrl = (basePath: string, type: string) => {
    const pathSegments = currentPath.split("/").filter(Boolean);
    return `/${pathSegments[0]}/${pathSegments[1]}/${
      pathSegments[2]
    }/${type}/${documentName}/${documentName.split(" ").join("-")}`;
  };

  const handleClickDocument = () => {
    router.push(constructUrl(currentPath, "sol"));
  };

  return (
    <Card className="max-w-[320px] w-full shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105 m-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg">
      <CardHeader>
        <div
          className="flex justify-between items-center cursor-pointer bg-slate-200 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300 hover:bg-slate-300 dark:hover:bg-gray-600"
          onClick={handleClickDocument}
        >
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {documentName}
          </CardTitle>
          <div className="relative text-2xl transition-opacity duration-300">
            <IoMdArrowDroprightCircle className="opacity-100 transition-opacity duration-300" />
            <FaLocationArrow className="absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </div>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-300">
          Instructor: {instructorName}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label className="text-gray-700 dark:text-gray-400">
              Semester: {semester}
            </Label>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label className="text-gray-700 dark:text-gray-400">
              Uploaded on: {uploadDate}
            </Label>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label className="text-gray-700 dark:text-gray-400">
              Uploaded by: Deepak Kumar
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
