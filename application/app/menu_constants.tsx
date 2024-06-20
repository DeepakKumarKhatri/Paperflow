import { SideNavItemGroup } from "@/types/type";
import { BsQuestionCircle } from "react-icons/bs";
import { MdSupportAgent, MdPayments, MdLeaderboard } from "react-icons/md";
import { FaDiscourse } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
import { GrHelpBook } from "react-icons/gr";
import { FaUniversity } from "react-icons/fa";

export const SIDENAV_ITEMS: SideNavItemGroup[] = [
  {
    title: "Quick Access",
    menuList: [
      {
        title: "Courses",
        path: "/courses",
        icon: <FaUniversity size={20} />,
      },
      {
        title: "Bookmarks",
        path: "/bookmarks",
        icon: <IoBookmarksSharp size={20} />,
      },
      {
        title: "Contributions",
        path: "/contributions",
        icon: <GrHelpBook size={20} />,
      },
      {
        title: "Leaderboard",
        path: "/leaderboard",
        icon: <MdLeaderboard size={20} />,
      },
      {
        title: "Inbox",
        path: "/inbox",
        icon: <FaDiscourse size={20} />,
      },
    ],
  },
  {
    title: "Others",
    menuList: [
      {
        title: "Billings",
        path: "/billings",
        icon: <MdPayments size={20} />,
      },
      {
        title: "Support",
        path: "/support",
        icon: <MdSupportAgent size={20} />,
      },
      {
        title: "Help",
        path: "/help",
        icon: <BsQuestionCircle size={20} />,
      },
    ],
  },
];
