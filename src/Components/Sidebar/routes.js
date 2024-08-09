import Dashboard from "@mui/icons-material/Dashboard";
// import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import AssignmentSharpIcon from "@mui/icons-material/AssignmentSharp";
import CallSplitSharpIcon from "@mui/icons-material/CallSplitSharp";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import ScienceSharpIcon from "@mui/icons-material/ScienceSharp";
import SubjectSharpIcon from "@mui/icons-material/SubjectSharp";
import SupportAgentSharpIcon from "@mui/icons-material/SupportAgentSharp";
import VideoLibrarySharpIcon from "@mui/icons-material/VideoLibrarySharp";

export const routes = [
  {
    name: "Dashboard",
    path: "/",
    icon: Dashboard,
  },
  // {
  //   name: "Assignments",
  //   path: "/assignments",
  //   icon: AssignmentSharpIcon,
  // },
  {
    name: "Courses",
    path: "/courses",
    icon: CallSplitSharpIcon,
  },
  {
    name: "Videos",
    path: "/videos",
    icon: VideoLibrarySharpIcon,
  },
  // {
  //   name: "Lab Reports",
  //   path: "/lab-reports",
  //   icon: ScienceSharpIcon,
  // },
  // {
  //   name: "Profiles",
  //   path: "/profiles",
  //   icon: PersonSharpIcon,
  // },
  {
    name: "Research Papers",
    path: "/research-papers",
    icon: MenuBookSharpIcon,
  },
  // {
  //   name: "Students",
  //   path: "/students",
  //   icon: PeopleSharpIcon,
  // },

  // {
  //   name: "Teachers",
  //   path: "/teachers",
  //   icon: SchoolSharpIcon,
  // },

  // {
  //   name: "Orders",
  //   path: "/orders",
  //   icon: LocalShippingSharpIcon,
  // },
];