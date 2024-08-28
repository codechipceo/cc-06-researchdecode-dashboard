import SendIcon from "@mui/icons-material/Send";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectAdminInfo } from "../../Features/Slices/adminSlice";
import {
  getConversation,
  selectChats,
} from "../../Features/Slices/consultancySlice";
import { useSockets } from "../../Hooks/useSockets";
export const Chat = () => {
  const { userId } = useParams();
  const { socket } = useSockets();
  const admin = useSelector(selectAdminInfo);
  const oldChats = useSelector(selectChats);
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [liveChats, setLiveChats] = useState([]);
  const navigate = useNavigate();
  const roomId = `${userId}-${admin?._id}`;

  const chatContainer = useRef(null)


  // ####################################
  //          USE EFFECTS
  // ####################################

  useEffect(() => {
    socket.emit("joinRoom", roomId);
  }, []);

  useEffect(() => {
    if (chatContainer.current) {
       const scrollHeight = chatContainer.current.scrollHeight;
       chatContainer.current.scrollTop = scrollHeight;
    }
    socket.on("message", (params) => {
      const newMessages = [...liveChats, params];
      setLiveChats(newMessages);
    });
  }, [liveChats, socket]);

  useEffect(() => {
    const payload = { senderId: admin._id, recepientId: userId };
    dispatch(getConversation(payload));
  }, []);

  useEffect(() => {
    const modifiedChats = [...oldChats];
    setLiveChats(modifiedChats.reverse());
  }, [oldChats]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    const payload = {
      roomId: roomId,
      content: message,
      sender: admin._id,
      senderModel: "Profile",
      recipient: userId,
      recipientModel: "Student",
    };
    socket.emit("chat", payload);
    setMessage("");
  };
  return (
    <div>
      <Paper
        sx={{
          padding: "",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
        }}
        elevation={0}
      >
        <Typography
          variant='h5'
          component='div'
          sx={{ marginBottom: "20px" }}
        ></Typography>
        <List ref={ chatContainer} sx={{ flex: 1, overflow: "auto", marginBottom: "20px" }}>
          {liveChats &&
            [...liveChats].map((msg) => {
              return (
                <Box key={msg._id}>
                  <ListItem
                    key={msg._id}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems:
                        msg.sender === admin._id ? "flex-end" : "flex-start",
                    }}
                  >
                    <ListItemText
                      primary={msg.content}
                      secondary={msg.sender === admin._id ? "You" : "User"}
                      sx={{
                        bgcolor:
                          msg.sender === admin._id ? "#dcf8c6" : "#9fc5e8",
                        borderRadius: "10px",
                        padding: "10px",
                        maxWidth: "75%",
                      }}
                    ></ListItemText>
                  </ListItem>
                </Box>
              );
            })}
        </List>


        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "sticky",
            bottom: 0,
            // backgroundColor: "#f1f0f0",
            padding: "10px",
            borderRadius: "10px",
            gap: "10px",
            // boxShadow: "0 -2px 5px rgba(0,0,0,0.2)", // Optional shadow for better visibility
          }}
        >
          <TextField
            label='Message'
            variant='outlined'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ flex: 1 }}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={handleSendMessage}
            endIcon={<SendIcon />}
            sx={{ width: "100px" }}
          >
            Send
          </Button>
          <Button onClick={() => navigate(`/videocall/${userId}`)}>
            <VideoChatIcon /> Join Room
          </Button>
        </Box>
      </Paper>
    </div>
  );
};
