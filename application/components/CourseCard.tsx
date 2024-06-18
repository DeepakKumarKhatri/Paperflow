"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const CourseCard = ({
  courseName,
  courseCode,
  creditHours,
  contentSize,
}: {
  courseName: string;
  courseCode: string;
  creditHours: string;
  contentSize: string;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/courses/${courseCode}`);
  };

  return (
    <Card
      className="w-[320px] p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105"
      onClick={handleClick}
    >
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{courseCode}</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {courseName}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">{creditHours} Hours</Label>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">{contentSize} Files</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
