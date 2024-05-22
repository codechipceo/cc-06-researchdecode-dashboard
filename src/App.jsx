import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useResponsive } from "./Hooks/use-responsive";
import { SideDrawer } from "./Components/Drawer/Drawer";
import { Category, Subcategory } from "./Pages/indexPages";
import PropTypes from "prop-types";

const drawerWidth = 240;

function App() {
  const deviceType = useResponsive();

  console.log(deviceType)

  return (
    <>
      <BrowserRouter>
          <div style={{ display: "flex" }}>
            <SideDrawer />
            <div
              style={{ marginLeft: deviceType === "MOBILE" ? 0 : drawerWidth }}
              >
              <Routes>
              <Route
                path='/'
                element={
                  <GuardComponents
                    Component={Category}
                    userPermissions={[]}
                    allowedModule={"CATEGORY"}
                    allowedPermissions={[]}
                  />
                }
                />
                </Routes>
            </div>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;

function GuardComponents({
  Component,
  userPermissions,
  allowedModule,
  allowedPermissions,
}) {
  const navigate = useNavigate();

  const userModules =
    Array.isArray(userPermissions) &&
    userPermissions?.map((module_permission) => {
      return String(module_permission).split("_").at(0);
    });

  // if (!userModules.includes(allowedModule)) {
  //   return navigate("/");
  // }

   return <Component
      userModules={userModules}
      allowedPermissions={allowedPermissions}
      userPermissions={userPermissions}
    />


}
GuardComponents.propTypes = {
  userPermissions: PropTypes.arrayOf(PropTypes.string),
  Component: PropTypes.func,
  allowedModule: PropTypes.string,
  allowedPermissions: PropTypes.arrayOf(PropTypes.string),
};
