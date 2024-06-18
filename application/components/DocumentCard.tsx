"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
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

  const handleClick = () => {
    router.push(`/document/${documentName}`);
  };

  return (
    <Card
      className="max-w-[300px] w-full shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105 m-4 bg-white dark:bg-gray-800"
      onClick={handleClick}
    >
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{documentName}</CardTitle>
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
      <CardFooter className="flex flex-col gap-1">
        <Button className="text-sm self-start">Add a Solution</Button>
        <Button variant="outline" className="text-sm self-start">
          Available Solutions: {solutionsCount}
        </Button>
      </CardFooter>
    </Card>
  );
}
