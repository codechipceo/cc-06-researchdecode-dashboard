import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const InboxCard = ({ data }) => {
    const navigate = useNavigate()
  const { firstName, lastName, _id } = data;
    const handleClick = () => {
      navigate(`/inbox/${_id}`)
  };
  return (
      <Box display={'flex'} justifyContent={'space-between'} flex={1} mt={2} borderRadius={4}  boxShadow={'1'} px={4} py={3}>
      <Typography variant='h6'>{firstName + lastName}</Typography>
      <Button variant='outlined' onClick={handleClick}>
        Reply{" "}
      </Button>
    </Box>
  );
};
