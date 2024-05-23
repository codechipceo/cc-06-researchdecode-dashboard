import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useResponsive } from "./Hooks/use-responsive";
import { SideDrawer } from "./Components/Drawer/Drawer";
import { Assignment } from "./Pages/indexPages";
import PropTypes from "prop-types";

const drawerWidth = 240;

function App() {
  const deviceType = useResponsive();

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
                element={<GuardComponents component={Assignment} />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

function GuardComponents({ component: Component }) {
  const rest = {
    token: "some token from backend",
    userRole: "ADMIN",
  };

  return <Component {...rest} />;
}
GuardComponents.propTypes = {
  component: PropTypes.func,
};
