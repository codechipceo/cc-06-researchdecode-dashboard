import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "./routes";
import PropTypes from "prop-types";

const CreateIcon = ({ MyIcon }) => {
  return MyIcon ? <MyIcon sx={{ color: "black" }} /> : null;
};

CreateIcon.propTypes = {
  MyIcon: PropTypes.elementType.isRequired,
};

export const Sidebar = () => {
  const [open, setOpen] = useState(-1);
  const navigate = useNavigate();

  const handleOpen = (index) => {
    setOpen(open === index ? -1 : index);
  };

  return (
    <List>
      {routes.map((route, mainIndex) => {
        const { path, name, icon, subMenu } = route;

        return (
          <div key={mainIndex}>
            <ListItemButton
              onClick={() => {
                if (path) {
                  navigate(path);
                } else {
                  handleOpen(mainIndex);
                }
              }}
            >
              <ListItemIcon>
                <CreateIcon MyIcon={icon} />
              </ListItemIcon>
              <ListItemText primary={name} />
              {subMenu ? (open === mainIndex ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItemButton>
            {subMenu && (
              <Collapse in={open === mainIndex} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {subMenu.map((subRoute, index) => {
                    const { path, name, icon } = subRoute;
                    return (
                      <ListItemButton
                        key={index}
                        sx={{ pl: 4 }}
                        onClick={() => {
                          navigate(path);
                        }}
                      >
                        <ListItemIcon>
                          <CreateIcon MyIcon={icon} />
                        </ListItemIcon>
                        <ListItemText primary={name} />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            )}
          </div>
        );
      })}
    </List>
  );
};