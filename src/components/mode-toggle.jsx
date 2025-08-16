import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/theme/theme-context";

const ModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="p-2 text-gray-600 border border-gray-300 rounded-md bg-slate-100 cursor-pointer"
      onClick={() => toggleTheme()}
    >
      {theme === "light" ? (
        <Moon className="size-4" />
      ) : (
        <Sun className="size-4" />
      )}
    </button>
  );
};

export default ModeToggle;
