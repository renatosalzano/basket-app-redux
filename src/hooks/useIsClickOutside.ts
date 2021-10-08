import { useEffect, useState } from "react";

export const useIsClickOutside = (ref: any) => {
  const [clickOutside, setClickOutside] = useState<boolean>(false);

  const is_click_outside = (evt: any) => {
    if (ref.current && !ref.current.contains(evt.target)) {
      //setShowList(false);
      return console.log("outside");
    }
    return console.log("inside");
  };

  useEffect(() => {
    document.addEventListener("click", is_click_outside, false);
    return () => {
      console.log("destroyed comp");
      document.removeEventListener("click", is_click_outside, false);
    };
  });

  return { is_click_outside };
};
