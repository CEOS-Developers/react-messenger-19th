import { useEffect, useState } from "react";


export default function useDoubleClick() {
  const [click, setClick] = useState(0);
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);

  const handleClick = () => {
    setClick((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setClick(0);
    }, 300);
    if (click === 2) setIsDoubleClicked((prev) => !prev);

    return () => clearTimeout(timer);
  }, [click]);
  return { handleClick, isDoubleClicked}
}
