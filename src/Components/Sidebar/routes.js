import Dashboard from "@mui/icons-material/Dashboard";
// import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import SupportAgentSharpIcon from "@mui/icons-material/SupportAgentSharp";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import ViewModuleSharpIcon from "@mui/icons-material/ViewModuleSharp";
import CallSplitSharpIcon from "@mui/icons-material/CallSplitSharp";
import AssignmentSharpIcon from "@mui/icons-material/AssignmentSharp";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import ScienceSharpIcon from "@mui/icons-material/ScienceSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import SubjectSharpIcon from "@mui/icons-material/SubjectSharp";
import VideoLibrarySharpIcon from "@mui/icons-material/VideoLibrarySharp";

export const routes = [
  {
    name: "Dashboard",
    path: "/",
    icon: Dashboard,
  },
  {
    name: "Assignments",
    path: "/assignments",
    icon: AssignmentSharpIcon,
  },
  {
    name: "Courses",
    path: "/courses",
    icon: CallSplitSharpIcon,
  },
  {
    name: "Lab Reports",
    path: "/lab-reports",
    icon: ScienceSharpIcon,
  },
  {
    name: "Profiles",
    path: "/profiles",
    icon: PersonSharpIcon,
  },
  {
    name: "Research Papers",
    path: "/research-papers",
    icon: MenuBookSharpIcon,
  },
  {
    name: "Students",
    path: "/students",
    icon: PeopleSharpIcon,
  },
  {
    name: "Subjects",
    path: "/subjects",
    icon: SubjectSharpIcon,
  },
  {
    name: "Teachers",
    path: "/teachers",
    icon: SchoolSharpIcon,
  },
  {
    name: "Videos",
    path: "/videos",
    icon: VideoLibrarySharpIcon,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: LocalShippingSharpIcon,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: PersonAddAltSharpIcon,
  },
  {
    name: "Employees",
    path: "/employees",
    icon: SupportAgentSharpIcon,
  },
  {
    name: "Modules",
    path: "/modules",
    icon: ViewModuleSharpIcon,
  },
];