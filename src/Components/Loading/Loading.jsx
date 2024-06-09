import { CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <div
      className='loading'
      style={{
        height: "100vh",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress sx={{ position: "absolute", height: "100vh" }} />
    </div>
  );
};
