import React, { useEffect, useState } from "react";

type TypewriterProps = {
  textArray: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
};

const Typewriter: React.FC<TypewriterProps> = ({
  textArray,
  typingSpeed = 100,
  pauseDuration = 1500,
  loop = true,
}) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= textArray.length) return;

    if (subIndex === textArray[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pauseDuration);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (loop ? (prev + 1) % textArray.length : prev + 1));
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
      setText(textArray[index].substring(0, subIndex));
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, textArray, typingSpeed, pauseDuration, loop]);

  return (
    <div className="font-mono text-3xl md:text-5xl text-gray-800 dark:text-white">
      {text}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default Typewriter;
