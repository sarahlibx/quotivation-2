import React, { useEffect } from "react";

const Message = ({ messageText, setShowMessage }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [setShowMessage]);

  return (
    <div className='message' style={{ display: "flex", justifyContent: "space-between" }}>
      {messageText}{" "}
      <span className='close-message' onClick={() => setShowMessage(false)}>
        X
      </span>
    </div>
  );
};

export default Message;
