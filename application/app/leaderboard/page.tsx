import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaMedal } from "react-icons/fa";
import { students } from "@/lib/students";

const getBadge = (rank: number) => {
  switch (rank) {
    case 1:
      return <FaMedal className="text-yellow-500" />;
    case 2:
      return <FaMedal className="text-gray-400" />;
    case 3:
      return <FaMedal className="text-orange-400" />;
    default:
      return null;
  }
};

export default function LeaderboardPage() {
  return (
    <div className="px-4 py-6">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Leaderboard</CardTitle>
          <CardDescription>
            Check out the top contributors in our community!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="w-full text-left">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Number of Contributions</TableHead>
                <TableHead>University</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={student.id} className="hover:bg-gray-100">
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      {getBadge(index + 1)}
                      <span className="ml-2">{index + 1}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar className="mr-2">
                        <AvatarImage src={student.avatar} />
                        <AvatarFallback>{student.name[0]}</AvatarFallback>
                      </Avatar>
                      {student.name}
                    </div>
                  </TableCell>
                  <TableCell>{student.contributions}</TableCell>
                  <TableCell>{student.university}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
