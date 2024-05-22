import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { Drawer, IconButton, Typography } from "@mui/material";
import  { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";

export const SideDrawer = () => {
  const drawerWidth = 240;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <div>
      <MenuSharpIcon onClick={handleDrawerToggle} />

      {/* MOBILE SIDE BAR */}
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ ml: "auto", display: { sm: "none" } }}
        >
          Close
        </IconButton>

        <Sidebar />
      </Drawer>

      {/* MAIN SIDEBAR */}
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        <Typography
          variant='h4'
          sx={{ marginLeft: "auto", marginRight: "auto", paddingTop: 2 }}
        >
          Brand Name
        </Typography>
        <Sidebar />
      </Drawer>
    </div>
  );
};
