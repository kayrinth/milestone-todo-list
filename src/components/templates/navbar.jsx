import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../lib/theme/useTheme";
import { Button } from "../atoms/button";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="absolute top-0 z-50 w-full py-3 px-4">
      <div className="flex items-center justify-end">
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          {theme === "light" ? <Moon color="#1A1A1A" /> : <Sun color="white" />}
        </Button>
      </div>
    </header>
  );
}
