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
  return (
    <>
      {MyIcon && <MyIcon sx={[{ color: "black" }]} />}{" "}
      {/* Render the icon component if it exists */}
    </>
  );
};

export const Sidebar = () => {
  const [open, setOpen] = useState(-1);
  const navigate = useNavigate();
  const handleOpen = (value) => {
    setOpen(open === value ? -1 : value);
  };

  return (
    <>
      {routes?.map((route, mainIndex) => {
        const { path, name, icon, subMenu } = route;

        return (
          <List key={mainIndex}>
            <ListItemButton
              onClick={() => {
                path ? navigate(path) : handleOpen(mainIndex);
              }}
            >
              <ListItemIcon>{<CreateIcon MyIcon={icon} />}</ListItemIcon>

              <ListItemText
                primary={name}
                onClick={() => {
                  path && navigate(path);
                }}
              />

              {subMenu && open === mainIndex ? (
                <ExpandLess />
              ) : (
                subMenu && <ExpandMore />
              )}
            </ListItemButton>
            {subMenu &&
              subMenu.map((subRoutes, index) => {
                const { path, name, icon } = subRoutes;
                return (
                  <div key={index}>
                    <Collapse
                      in={open === mainIndex}
                      timeout='auto'
                      unmountOnExit
                    >
                      <List component='div' disablePadding>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          onClick={() => {
                            path && navigate(path);
                          }}
                        >
                          <ListItemIcon>
                            <CreateIcon MyIcon={icon} />
                          </ListItemIcon>
                          <ListItemText primary={name} />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </div>
                );
              })}
          </List>
        );
      })}
      <List></List>
    </>
  );
};

CreateIcon.propTypes = {
  MyIcon: PropTypes.elementType.isRequired,
};
