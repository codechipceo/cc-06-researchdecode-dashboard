import Dashboard from "@mui/icons-material/Dashboard";
import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import Inventory2SharpIcon from "@mui/icons-material/Inventory2Sharp";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import SupportAgentSharpIcon from "@mui/icons-material/SupportAgentSharp";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import ViewModuleSharpIcon from "@mui/icons-material/ViewModuleSharp";
import CallSplitSharpIcon from "@mui/icons-material/CallSplitSharp";
export const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Dashboard,
  },

  {
    name: "Category",
    path: "/category",
    icon: CategorySharpIcon,
  },
  {
    name: "Subcategory",
    path: "/subcategory",
    icon: CallSplitSharpIcon,
  },
  {
    name: "Products",
    icon: Inventory2SharpIcon,
    subMenu: [
      {
        name: "Add New",
        path: "products/create",
        icon: Inventory2SharpIcon,
      },
      {
        name: "View Products",
        path: "products/view",
        icon: Inventory2SharpIcon,
      },
    ],
  },
  {
    name: "Orders",
    path: "/dashboard",
    icon: LocalShippingSharpIcon,
  },
  {
    name: "Customers",
    path: "/dashboard",
    icon: PersonAddAltSharpIcon,
  },
  {
    name: "Employees",
    path: "/dashboard",
    icon: SupportAgentSharpIcon,
  },
  {
    name: "Modules",
    path: "/dashboard",
    icon: ViewModuleSharpIcon,
  },
];
