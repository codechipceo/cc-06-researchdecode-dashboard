import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useResponsive } from "./Hooks/use-responsive";
import { SideDrawer } from "./Components/Drawer/Drawer";
import { Assignment} from "./Pages/indexPages";
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
                    component={<Assignment/>}
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
  
}) {
  const navigate = useNavigate();

 

  

   return <Component
     
    />


}
GuardComponents.propTypes = {
  
  Component: PropTypes.func,
  
};
