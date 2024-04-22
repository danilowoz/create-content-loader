import ContentLoader  from "react-content-loader";

const Chat = (props: any) => {
  return (
    <ContentLoader
      viewBox="30 0 950 500"
      backgroundColor="#CCFAF9" // Light gray background
      foregroundColor="#363269" // Custom foreground (loading animation) color
      {...props}
    >
     
     <circle cx="40" cy="20" r="8"  width="40" height="10"  />
      <rect x="56" y="12" rx="5" ry="5" width="400" height="10" />
      <rect x="56" y="29" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  );
};

Chat.metadata = {
  name: "HAIDER Ali", // My name
  github: "https://github.com/HaiderAli170", // Github username
  description: "Chat GPT", // Little tagline
  filename: "ChatGPT", // filename of your loader
};

export default Chat;
