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
    const peer = new Peer(info._id);
    peerInstance.current = peer;

    // Get user's video and audio stream
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // Display my video stream
        myVideo.current.srcObject = stream;

        // Answer incoming call
        peer.on("call", (call) => {
          call.answer(stream); // Answer the call with your own video/audio stream
          setCurrentCall(call); // Save the call to the state
          call.on("stream", (userVideoStream) => {
            userVideo.current.srcObject = userVideoStream; // Show the remote video stream
          });
        });
      });

    // Set my PeerJS ID
    peer.on("open", (id) => {
      setMyId(id);
    });

    // Handle new user connection
    socket.on("connection", (userId) => {
      console.log("User connected:", userId);
    });

    // Handle user disconnection
    socket.on("user-disconnected", (userId) => {
      console.log("User disconnected:", userId);
    });
  }, []);

  // Function to call another user by ID
  const callUser = (userId) => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        const call = peerInstance.current.call(userId, stream);
        setCurrentCall(call); // Save the call to the state
        call.on("stream", (userVideoStream) => {
          userVideo.current.srcObject = userVideoStream; // Show the remote video stream
        });
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
