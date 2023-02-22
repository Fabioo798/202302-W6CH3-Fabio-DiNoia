import React, { useState, useEffect } from "react";

export function Actions(props: any) {
  const [callState, setCallState] = useState("idle");

  useEffect(() => {
    if (callState === "calling") {
      const timerId = setTimeout(() => {
        endCall();
      }, 5000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [callState]);

  const startCall = () => {
    if (props.phoneNumber.length === 9) {
      setCallState("calling");
      props.setPhoneNumber("");
    }
  };

  const endCall = () => {
    setCallState("idle");
    props.setPhoneNumber("");
  };

  return (
    <div className="actions">
      {callState === "idle" && (
        <button className="call-button" onClick={startCall}>
          Call
        </button>
      )}
      {callState === "calling" && (
        <button className="hang-button" onClick={endCall}>
          Hang
        </button>
      )}
    </div>
  );
}
