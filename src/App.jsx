import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideDrawer } from "./Components/Drawer/Drawer";
import {
  selectAdminInfo,
  selectAdminToken,
} from "./Features/Slices/adminSlice";
import { useResponsive } from "./Hooks/use-responsive";
import { Assignment, Course, Dashboard, Login } from "./Pages/indexPages";
import { Teachers } from "./Pages/Teachers/Teachers";
import { Videos } from "./Pages/Videos/Videos";
import { Inbox } from "./Pages/Chat/Inbox";
import { Chat } from "./Pages/Chat/Chat";
import Videocall from "./Pages/Chat/Videocall";
import LabPage from "./Pages/Lab/LabPage";

function App() {
  const deviceType = useResponsive();
  const token = useSelector(selectAdminToken);
  const drawerWidth = token ? 240 : 0;

  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          {token ? <SideDrawer drawerWidth={drawerWidth} /> : ""}
          <div
            style={{
              marginLeft: deviceType === "MOBILE" ? 0 : drawerWidth,
              width: "100vw",
            }}
          >
            <Routes>
              <Route
                path="/"
                element={<GuardComponents component={Dashboard} />}
              />
              <Route
                path="/assignments"
                element={<GuardComponents component={Assignment} />}
              />
              <Route
                path="/courses"
                element={<GuardComponents component={Course} />}
              />
              <Route
                path="/inbox"
                element={<GuardComponents component={Inbox} />}
              />
              <Route
                path="/inbox/:userId"
                element={<GuardComponents component={Chat} />}
              />
              <Route path="/videocall/:peerId" element={<Videocall />} />
              <Route
                path="/teachers"
                element={<GuardComponents component={Teachers} />}
              />
              <Route
                path="/videos"
                element={<GuardComponents component={Videos} />}
              />

              <Route
                path="/lab"
                element={<GuardComponents component={LabPage} />}
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
  const loggedinUser = useSelector(selectAdminInfo);

  if (!token) {
    return <Login />;
  }

  // condition
  const rest = {
    token: token,
    loggedinUser,
  };

  return <Component {...rest} />;
}
GuardComponents.propTypes = {
  component: PropTypes.func,
};
