import { useEffect, useState } from "react";
import ContentLoader  from "react-content-loader";

const ChatGPT = (props) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('preferredDarkMode') === 'true' ? 'dark' : 'light';
    setTheme(storedTheme);
  }, []);

  const backgroundColor = theme === 'dark' ? '#1e293b ' : '#CCFAF9';
  const foregroundColor = theme === 'dark' ? '#155e75  ' : '#2C3E50';
  return (
    <ContentLoader
      viewBox="30 0 950 500"
      backgroundColor={backgroundColor}// Light gray background
      foregroundColor={foregroundColor} // Custom foreground (loading animation) color
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

export default ChatGPT;
