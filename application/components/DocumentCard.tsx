"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";

export function DocumentCard({
  documentName,
  instructorName,
  semester,
  uploadDate,
  solutionsCount,
}: {
  documentName: string;
  instructorName: string;
  semester: string;
  uploadDate: string;
  solutionsCount: string;
}) {
  const router = useRouter();
  const currentPath = usePathname();

  const constructUrl = (basePath: string, type: string) => {
    const pathSegments = currentPath.split("/").filter(Boolean);
    return `/${pathSegments[0]}/${pathSegments[1]}/${pathSegments[2]}/${type}/${documentName}`;
  };

  const handleClickDocument = () => {
    router.push(constructUrl(currentPath, "doc"));
  };

  const handleClickSolution = (event: React.MouseEvent) => {
    event.stopPropagation();
    router.push(constructUrl(currentPath, "sol"));
  };

  return (
    <Card className="max-w-[300px] w-full shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105 m-4 bg-white dark:bg-gray-800">
      <CardHeader>
        <div
          title="Open this document"
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
        </div>
      </CardContent>
      <CardFooter className="flex gap-1 flex-row justify-between">
        <Button
          title="Checkout Available Solutions"
          onClick={handleClickSolution}
          className="text-sm self-start"
        >
          Available Solutions: {solutionsCount}
        </Button>
        <CiBookmarkPlus title="Add this to bookmark" />
      </CardFooter>
    </Card>
  );
}
