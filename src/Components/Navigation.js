import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { useTransition, animated } from "@react-spring/web";
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const maskTransitions = useTransition(showMenu, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  return (
    <nav>
      <FaBars onClick={() => setShowMenu(!showMenu)} />

      {maskTransitions((style, item) =>
        item ? (
          <animated.div
            style={style}
            className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full z-50"
            onClick={() => setShowMenu(false)}
          />
        ) : null
      )}

      {menuTransitions((style, item) =>
        item ? (
          <animated.div
            style={style}
            className="fixed bg-white top-0 left-0 w-4/5 md:w-64 h-full z-50 shadow p-3"
          >
            <NavigationMenu closeMenu={() => setShowMenu(false)} />
          </animated.div>
        ) : null
      )}
    </nav>
  );
};

export default Navigation;
