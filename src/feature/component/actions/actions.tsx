import { useCallback, useEffect, useState } from "react";

export function Actions(props: any) {
    const [callState, setCallState] = useState("idle");
  
    const endCall = useCallback(() => {
        setCallState("idle");
        props.setPhoneNumber("");
      }, [props]);
  
    useEffect(() => {
      if (callState === "calling") {
        const timerId = setTimeout(() => {
          endCall();
        }, 5000);
  
        return () => {
          clearTimeout(timerId);
        };
      }
    }, [callState, endCall]);
  
    const startCall = () => {
      if (props.phoneNumber.length === 9) {
        setCallState("calling");
        props.setPhoneNumber("");
      }
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
  