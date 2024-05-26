import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import { useResponsive } from "./Hooks/use-responsive";
import { SideDrawer } from "./Components/Drawer/Drawer";
import { Assignment, Course, Login, Dashboard } from "./Pages/indexPages";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectAdminToken } from "./Features/Slices/adminSlice";


function App() {
  const deviceType = useResponsive();
  const token = useSelector(selectAdminToken);
  console.log(token)
  const drawerWidth = token ? 240 :0;

  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          {token ? <SideDrawer drawerWidth={drawerWidth} /> :""}
          <div
            style={{
              marginLeft: deviceType === "MOBILE"  ? 0 : drawerWidth,
              width: "100vw",
            }}
          >
            <Routes>
              <Route
                path='/'
                element={<GuardComponents component={Dashboard} />}
              />
              <Route
                path='/assignments'
                element={<GuardComponents component={Assignment} />}
              />
              <Route
                path='/courses'
                element={<GuardComponents component={Course} />}
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
  const token = useSelector(selectAdminToken);

  if (!token) {
    return <Login />;
  }

  // condition
  const rest = {
    token: token,
    userRole: "ADMIN",
  };

  return <Component {...rest} />;
}
GuardComponents.propTypes = {
  component: PropTypes.func,
};
