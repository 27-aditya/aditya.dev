import React, { useState } from "react";

const EasterEgg = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const messages = [
    "Message 1",
    "Message 2",
    "Message 3",
    // Add more messages as needed
  ];

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  const handleClick = () => {
    setShowTooltip(true);
    // Hide the tooltip after 3 seconds
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  };

  return (
    <div className="relative border-darkslate-200 bg-gray-400 rounded-xl border-2 p-2 hover:border-cyan-300 transition-colors duration-300">
      <div className="flex justify-center m-5">
        <button onClick={handleClick}>
          <img
            src="/global.png"
            height="100px"
            width="100px"
            className="animate duration-1000"
            alt="Global"
          />
        </button>
      </div>
      {showTooltip && (
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-24 mt-1 w-auto max-h-[70px] p-2 bg-black text-white text-center rounded-lg z-10 shadow-custom shadow-primary-500 border border-primary-500 whitespace-normal after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:shadow-custom after:shadow-primary-500 after:absolute after:-bottom-2 after:-translate-x-1/2 after:left-1/2 after:bg-black after:z-25">
          <p className="w-max text-white">{getRandomMessage()}</p>
        </div>
      )}
    </div>
  );
};

export default EasterEgg;
