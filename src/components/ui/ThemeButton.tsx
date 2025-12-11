import React,{ useState,useEffect } from "react";
import clsx from "clsx";
import { Sun, Moon } from "lucide-react";

export function ThemeButton(){
    const [isDark, setIsDark] = useState<boolean>(false);
    useEffect(() => {
      if (localStorage.theme === "dark") {
        toDark();
      } else {
        toLight();
      }
    }, []);

    const changeMode = () => {
      if (localStorage.theme === "dark") {
        toLight();
      } else {
        toDark();
      }
    };

    const toDark = () => {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    };

    const toLight = () => {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
      setIsDark(false);
    };

    const buttonClass = clsx(
      'flex items-center space-x-1 px-1 py-2 cursor-pointer text-black transition duration-100 group dark:text-white',
    );

    const iconWrapper = clsx(
      'p-2 rounded-md border border-transparent transition-colors duration-100',
      'group-hover:border-white group-hover:bg-white/10'
    );

    return (
      <button
        className={buttonClass}
        tabIndex={0}
        onClick={changeMode}
        aria-pressed={isDark}
        // title={isDark ? "ライトモードに切替" : "ダークモードに切替"}
      >
        <span className={iconWrapper} aria-hidden="true">
          {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </span>
      </button>
    );
}