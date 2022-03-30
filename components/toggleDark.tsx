import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon } from "@heroicons/react/solid";
import { RiSunFill } from "react-icons/ri";

const ToggleDark: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <button
        aria-label="DarkModeToggle"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-gray-600 rounded-md w-8 h-8 p-1 self-center"
      >
        {mounted && (
          <>
            {theme === "dark" ? (
              <RiSunFill className="text-yellow-400 w-6 h-6" />
            ) : (
              <MoonIcon className="text-yellow-400 w-6 h-6 " />
            )}
          </>
        )}
      </button>
    </>
  );
};

export default ToggleDark;
