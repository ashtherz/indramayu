import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string[];
  typingSpeed?: number;
  delayBetweenLines?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 50,
  delayBetweenLines = 500,
}) => {
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLine >= text.length) {
      setIsTyping(false);
      return;
    }

    if (currentChar >= text[currentLine].length) {
      // Line completed
      setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, delayBetweenLines);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(prev => {
        const newText = [...prev];
        if (!newText[currentLine]) newText[currentLine] = '';
        newText[currentLine] = text[currentLine].substring(0, currentChar + 1);
        return newText;
      });
      setCurrentChar(prev => prev + 1);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentChar, currentLine, text, typingSpeed, delayBetweenLines]);

  return (
    <div className="font-['Arial']">
      {displayText.map((line, index) => (
        <div key={index} className="text-[#01347c] text-[18px] font-medium capitalize leading-[1.5]">
          {line}
          {index === currentLine && isTyping && (
            <span className="ml-1 animate-blink">|</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Typewriter;