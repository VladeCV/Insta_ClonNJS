import faker from "faker";
import { useEffect, useState } from "react";
import Story from "../components/Story";
function Stories() {
  const [suggestions, setsuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setsuggestions(suggestions);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-300
    rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
    >
      {/**Story */}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
