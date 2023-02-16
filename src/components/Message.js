import React, { useEffect } from "react";

const Message = ({ messageText, setShowMessage }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [setShowMessage]);

  return <div className='message'>{messageText}</div>;
};

export default Message;
