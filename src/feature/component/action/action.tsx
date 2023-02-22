import React, { useState } from "react";

export function Actions({ callState, onCall, onHang }: any) {
  const [isCalling, setIsCalling] = useState(false);

  function handleCallClick() {
    setIsCalling(true);
    onCall();
  }

  function handleHangClick() {
    setIsCalling(false);
    onHang();
  }

  return (
    <div className="actions-container">
      {isCalling ? (
        <button className="button hang" onClick={handleHangClick}>
          Hang
        </button>
      ) : (
        <button className={`button call ${callState === "active" ? "active" : ""}`} onClick={handleCallClick} disabled={callState !== "active"}>
          Call
        </button>
      )}
    </div>
  );
}
