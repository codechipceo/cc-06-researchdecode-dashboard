import { useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import { io } from "socket.io-client";
import { selectAdminInfo } from "../../Features/Slices/adminSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const socket = io("http://localhost:5001");

function Videocall() {
  const [myId, setMyId] = useState("");
  const [callId, setCallId] = useState(""); // State for storing the ID to call
  const [currentCall, setCurrentCall] = useState(null); // State to manage the current call
  const myVideo = useRef();
  const userVideo = useRef();
  const peerInstance = useRef();
  const { peerId } = useParams();
  const info = useSelector(selectAdminInfo);
useEffect(() => {
  // Create Peer instance
  const peer = new Peer(info._id, {
    config: {
      iceServers: [
        { url: "stun:stun.l.google.com:19302" }, // Public STUN server
        {
          url: "turn:13.235.36.252:3478",
          username: "user",
          credential: "H4iauI7gCpy39KxS9JoyeCzQzrnL4JGd",
        },
      ],
    },
  });
  peerInstance.current = peer;

  // Get user's video and audio stream
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      // Display my video stream
      myVideo.current.srcObject = stream;

      // Answer incoming call
      peer.on("call", (call) => {
        try {
          call.answer(stream); // Answer the call with your own video/audio stream
          setCurrentCall(call); // Save the call to the state
          call.on("stream", (userVideoStream) => {
            userVideo.current.srcObject = userVideoStream; // Show the remote video stream
          });
        } catch (error) {
          console.error("Error answering the call:", error);
        }
      });
    })
    .catch((error) => {
      console.error("Error accessing media devices:", error);
    });

  // Set my PeerJS ID
  peer.on("open", (id) => {
    setMyId(id);
  });

  // Handle Peer connection errors
  peer.on("error", (error) => {
    console.error("PeerJS error:", error);
  });

  // Handle new user connection
  socket.on("connection", (userId) => {
    console.log("User connected:", userId);
  });

  // Handle user disconnection
  socket.on("user-disconnected", (userId) => {
    console.log("User disconnected:", userId);
  });

  // Cleanup function to close the Peer connection and remove socket listeners
  return () => {
    if (peerInstance.current) {
      peerInstance.current.destroy();
    }
    socket.off("connection");
    socket.off("user-disconnected");
  };
}, []);

// Function to call another user by ID
const callUser = (userId) => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      try {
        const call = peerInstance.current.call(userId, stream);
        setCurrentCall(call); // Save the call to the state
        call.on("stream", (userVideoStream) => {
          userVideo.current.srcObject = userVideoStream; // Show the remote video stream
        });
        call.on("error", (error) => {
          console.error("Error during the call:", error);
        });
      } catch (error) {
        console.error("Error calling the user:", error);
      }
    })
    .catch((error) => {
      console.error("Error accessing media devices:", error);
    });
};


  // Function to end the current call
  const endCall = () => {
    if (currentCall) {
      currentCall.close(); // Close the call
      setCurrentCall(null); // Reset the current call state
      userVideo.current.srcObject = null; // Clear the remote video stream

      const stream = myVideo.current.srcObject;

      stream.getTracks().forEach((track) => track.stop());
      myVideo.current.srcObject = null; // Clear the local video stream
    }
  };

  return (
    <div>
      <button onClick={endCall} disabled={!currentCall}>
        End Call
      </button>{" "}
      {/* End Call button */}
      <div style={{ display: "flex" }}>
        <video ref={myVideo} autoPlay playsInline style={{ width: "50%" }} />
        <video ref={userVideo} autoPlay playsInline style={{ width: "50%" }} />
      </div>
    </div>
  );
}

export default Videocall;
