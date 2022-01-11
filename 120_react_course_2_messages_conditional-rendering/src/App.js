import React from "react";

export default function App() {
  const [messages, setMessages] = React.useState(["a", "b"]);

  const numberMessages = messages.length;
  /**
   * Challenge:
   * - Only display the <h1> below if there are unread messages
   */
  return (
    <div>
      <h1>You have {numberMessages} unread messages!</h1>
    </div>
  );
}
