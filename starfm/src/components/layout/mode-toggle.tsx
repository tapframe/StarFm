import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/layout/theme-provider"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative h-10 w-10 rounded-full overflow-hidden hover:bg-transparent"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {theme === "dark" ? (
                        <Moon className="h-[1.2rem] w-[1.2rem] text-blue-400" />
                    ) : (
                        <Sun className="h-[1.2rem] w-[1.2rem] text-orange-500" />
                    )}
                </motion.div>
            </AnimatePresence>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
