import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useResponsive } from "./Hooks/use-responsive";
import { SideDrawer } from "./Components/Drawer/Drawer";
import { Assignment, Course ,Login} from "./Pages/indexPages";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectAdminToken } from "./Features/Slices/adminSlice";
import { Dashboard } from "./Pages/Dashboard/Dashboard";


const drawerWidth = 240;

function App() {
  const deviceType = useResponsive();
   const token = useSelector(selectAdminToken);
console.log(token);
  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex" }}>
        {token && <SideDrawer   drawerWidth={drawerWidth} />}
          <div
            style={{ marginLeft: deviceType === "MOBILE" ? 0 : drawerWidth, width:"100vw" }}
          >
            <Routes>
            <Route
                path='/'
                element={token? <Dashboard/>:<Login/>} 
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
  const navigate=useNavigate()

    if(!token){
      navigate("/login")
      
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
