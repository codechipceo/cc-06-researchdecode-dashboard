import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInbox, selectInbox } from "../../Features/Slices/consultancySlice";
import { InboxCard } from "../../Components/InboxCard/InboxCard";
import { Box, Typography } from "@mui/material";
export const Inbox = () => {
  const dispatch = useDispatch();
  const inboxData = useSelector(selectInbox);
  useEffect(() => {
    dispatch(getInbox());
  }, []);
  return (
    <div>
      <Box>
        <Typography variant="h4">Messages</Typography>
      </Box>
      <Box>
        {inboxData &&
          inboxData.map((data) => {
            return <InboxCard data={data} key={data._id} />;
          })}
      </Box>
    </div>
  );
};
