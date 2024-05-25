import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adminLogin,
  selectAdminLoading,
  selectAdminErrorMsg,
  selectAdminIsError,
  selectAdminIsLoggedIn,
  selectAdminToken,
} from "../Features/Slices/adminSlice";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const dispatch = useDispatch();

 
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const isLoading = useSelector(selectAdminLoading);
  const isLoggedIn = useSelector(selectAdminIsLoggedIn);
  const adminToken = useSelector(selectAdminToken);
  const navigate=useNavigate()
  const handleLogin =  (data) => {
   
    dispatch(adminLogin(data)).then(()=>{
      if (isLoggedIn) {
        navigate("/");
      }
    })
    
  };

  return {

    isLoading,
    errorMessage,
    isError,
    isLoggedIn,
    handleLogin,
    adminToken,
  };
};

export default useLogin;
