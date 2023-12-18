// App.js
import React, { useState } from "react";
import Header from "./Components/Header";
import Card from "./Components/DatingCards";
import SwipeButtons from "./Components/SwipeButtons";
import "./App.css";

const App = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Taan",
      image:
        "https://th.bing.com/th/id/OIP.iAhcp6m_91O-ClK79h8EQQHaFj?rs=1&pid=ImgDetMain",
    },
    { id: 2, name: "Jane Doe", image: "https://placekitten.com/301/401" },
    // Add more profiles as needed
  ]);

  const onSwipe = (direction) => {
    // Handle swipe logic (e.g., remove the profile from the stack)
    // For simplicity, let's just remove the top profile for now
    setProfiles((prevProfiles) => prevProfiles.slice(1));
  };

  return (
    <div className="app">
      <Header />
      <div className="app__cardContainer">
        {profiles.map((profile) => (
          <Card key={profile.id} profile={profile} onSwipe={onSwipe} />
        ))}
      </div>
      <SwipeButtons />
    </div>
  );
};

export default App;
