import React, { useState, useCallback } from 'react';

const Tooltip = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const messages = [
    "Hi there!",
    "Clicked again?",
    "Still here?",
    "Persistent, aren't you?",
    "What's up?",
    "Again? Really?",
    "You're curious!",
    "Not cool!",
    "Give it a break!",
    "That's annoying!",
    "Hands off!",
    "No more clicks!",
    "Seriously?!",
    "Ouch! That hurts!",
    "You're persistent!",
    "Why the curiosity?",
    "I'm getting tired!",
    "I'm bored!",
    "Enough's enough!",
    "Find another hobby!",
    "Stop, please!",
    "Okay, last one!",
    "That's it, I'm done!",
  ];

  const currentMessage = useCallback(() => {
    return messages[Math.min(clickCount, messages.length - 1)];
  }, [clickCount, messages]);

  const handleMouseDown = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      setClickCount(prevCount => prevCount + 1);
    }
  };

  const handleMouseUp = () => {
    setIsVisible(false);
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-24 mt-1 w-auto max-h-[70px] p-2 bg-black text-white text-center rounded-lg z-10 shadow-custom shadow-primary-500 border border-primary-500 whitespace-normal">
          <div className="after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:shadow-custom after:shadow-primary-500 after:absolute after:-bottom-2 after:transform after:-translate-x-1/2 after:left-1/2 after:bg-black after:z-20"></div>
          <p className="w-max">{currentMessage()}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
